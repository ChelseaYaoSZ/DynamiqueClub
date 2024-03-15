"use strict";

// External imports
import retry from "retry";
import sgMail from "@sendgrid/mail";

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
  if (data.emailType === "subscription") {
    const requiredFields = ["email", "name", "parentName"];
    requiredFields.forEach((field) => {
      if (!(field in data)) {
        throw new Error(`Missing required field: ${field}`);
      }
    });

    return `
      <p>${data.parentName} (${data.email}) is subscribed to the newsletter.</p>
      `
  }
  else if (data.emailType === "registration") {
    try {
      // Ensure that all required fields are present in the data object
      const requiredFields = [
        "dateOfBirth",
        "firstName",
        "gender",
        "lastName",
        "level",
        "parentEmail",
        "parentFirstName",
        "parentLastName",
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
  }

  
};

const generateMessage = (email, data, csvData, htmlContent) => {
  try {
    if (!data || !csvData || !htmlContent) {
      throw new Error("Invalid input data");
    }

    const currentDate = new Date().toLocaleString();
    return {
      to: email,
      from: email,
      subject: `Form Submission - ${data.firstName} ${data.lastName} - ${currentDate}`,
      text: "Here is the form submission.",
      html: htmlContent, // HTML version of the message
      attachments: [
        {
          content: Buffer.from(csvData).toString('base64'),
          filename: "form-data.csv",
          type: "text/csv",
          disposition: "attachment",
          contentId: 'Form Data CSV File'
        },
      ],
    };
  } catch (error) {
    console.error("Error setting up mail options:", error);
    return null; // Return null or handle the error as appropriate
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

const sendEmailWithRetry = (email, data, apiKey) => {
  // Convert form data to CSV
  const csvData = convertToCSV([data]);
  console.log("CSV data generated:", csvData);

  // Generate HTML content for email
  const htmlContent = generateHtmlContent(data);
  console.log("HTML content generated:", htmlContent);

  // Configure email options
  const message = generateMessage(email, data, csvData, htmlContent);
  console.log("Message generated:", message);

  // Initialize retry operation
  const operation = getRetryOperation();
  console.log("Retry operation initialized:", operation);

  return new Promise((resolve, reject) => {
    operation.attempt(async (currentAttempt) => {
      try {
        sgMail.setApiKey(apiKey);
        const info = await sgMail.send(message);
        console.log("Email sent successfully");
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

export {
  convertToCSV,
  generateHtmlContent,
  getRetryOperation,
  sendEmailWithRetry,
};
