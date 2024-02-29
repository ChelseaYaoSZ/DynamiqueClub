"use strict";

// External imports
import dotenv from "dotenv";
import { createTransport } from "nodemailer";
import retry from "retry";

// Environment configuration
dotenv.config();

const convertToCSV = (objArray) => {
  try {
    if (!Array.isArray(objArray) || objArray.length === 0) {
      throw new Error("Input data must be a non-empty array");
    }

    const array = [Object.keys(objArray[0])].concat(objArray);
    return array
      .map((it) => {
        return Object.values(it).toString();
      })
      .join("\n");
  } catch (error) {
    console.error("Error converting data to CSV:", error);
    return ""; // Return empty string or handle the error as appropriate
  }
};

const generateHtmlContent = (data) => {
  try {
    // Ensure that all required fields are present in the data object
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "parentFirstName",
      "parentLastName",
      "parentEmail",
      "parentPhone",
    ];
    requiredFields.forEach((field) => {
      if (!(field in data)) {
        throw new Error(`Missing required field: ${field}`);
      }
    });

    return `
      <p>Here is the form submission for ${data.firstName} ${data.lastName}.</p>
      <p>First Name: ${data.firstName}</p>
      <p>Last Name: ${data.lastName}</p>
      <p>Date of Birth: ${data.dateOfBirth}</p>
      <p>Gender: ${data.gender}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Parent First Name: ${data.parentFirstName}</p>
      <p>Parent Last Name: ${data.parentLastName}</p>
      <p>Parent Email: ${data.parentEmail}</p>
      <p>Parent Phone: ${data.parentPhone}</p>
    `;
  } catch (error) {
    console.error("Error generating HTML content:", error);
    return ""; // Return empty string or handle the error as appropriate
  }
};

const getMailOptions = (data, csvData, htmlContent) => {
  try {
    if (!data || !csvData || !htmlContent) {
      throw new Error("Invalid input data");
    }

    const currentDate = new Date().toLocaleString();
    return {
      from: "Volleyball Dynamique Club",
      to: process.env.GOOGLE_EMAIL_ACCOUNT,
      subject: `Form Submission - ${data.firstName} ${data.lastName} - ${currentDate}`,
      text: "Here is the form submission.",
      html: htmlContent, // HTML version of the message
      attachments: [
        {
          filename: "form-data.csv",
          content: csvData,
        },
      ],
    };
  } catch (error) {
    console.error("Error setting up mail options:", error);
    return null; // Return null or handle the error as appropriate
  }
};

const sendEmail = async (transporter, mailOptions) => {
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const getRetryOperation = (
  retries = 0,
  factor = 2,
  minTimeout = 1000,
  maxTimeout = 60000,
  randomize = true
) => {
  return retry.operation({
    retries: retries,
    factor: factor,
    minTimeout: minTimeout,
    maxTimeout: maxTimeout,
    randomize: randomize,
  });
};

const sendEmailWithRetry = async (transporter, mailOptions, operation) => {
  if (!operation) {
    operation = getRetryOperation(1, 2, 1000, 60000, true);
  }
  return new Promise((resolve, reject) => {
    operation.attempt(async (currentAttempt) => {
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully: " + info.response);
        resolve(info);
      } catch (error) {
        console.error(
          `Error sending email (attempt ${currentAttempt}):`,
          error
        );
        if (operation.retry(error)) {
          console.log(`Retrying email (attempt ${currentAttempt + 1})...`);
          return;
        }
        reject(operation.mainError());
      }
    });
  });
};

// Middleware to check if user has valid access tokens
const checkAccessToken = (req, res, next) => {
  const { tokens } = req.session;
  if (!tokens) {
    console.warn("No access tokens found in session");
    // Redirect user to OAuth2 authentication flow
    return res.redirect("/api/auth/google");
  }
  // User has valid access tokens, proceed to next middleware
  next();
};

// Function to get the access token from the session
const getAccessToken = (req) => {
  const { tokens } = req.session;
  if (!tokens) {
    console.warn("No access tokens found in session");
    return null;
  }
  return tokens.access_token;
};

const accessType = process.env.NODEMAILER_ACCESS_TYPE || "AppPassword";

// Middleware to conditionally check access token
const conditionalCheckAccessToken = (req, res, next) => {
  if (accessType === "OAuth2") {
      return checkAccessToken(req, res, next);
  } else {
      return next(); // Skip checkAccessToken middleware
  }
};

// Configure your SMTP transporter
const getTransporter = (accessType = "AppPassword", req) => {
  switch (accessType) {
    case "OAuth2":
      const accessToken = getAccessToken(req);
      return getOAuth2Transporter(accessToken);
    default:
      return getAppPasswordTransporter();
  }
  
};

const getOAuth2Transporter = (accessToken) => {
  return createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_EMAIL_ACCOUNT,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
};

const getAppPasswordTransporter = () => {
  return createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL_ACCOUNT,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });
};

export {
  conditionalCheckAccessToken,
  convertToCSV,
  generateHtmlContent,
  getMailOptions,
  getRetryOperation,
  getTransporter,
  sendEmail,
  sendEmailWithRetry,
};
