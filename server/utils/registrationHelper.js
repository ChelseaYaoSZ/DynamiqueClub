"use strict";

// External imports
import retry from "retry";
import sgMail from "@sendgrid/mail";

const sendRegisterEmail = (email, data, apiKey) => {
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
    <div style="padding: 16px; background-color: #f8fafc; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <p style="font-weight: bold; font-size: 24px; margin-bottom: 8px; color: #1e40af;">Here is the form submission for ${data.firstName} ${data.lastName}.</p>
    <p><style="font-weight: semibold; color: #ef4444;">Level: ${data.level}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">First Name:</span> ${data.firstName}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Last Name:</span> ${data.lastName}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Date of Birth:</span> ${data.dateOfBirth}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Gender:</span> ${data.gender}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Email:</span> ${data.email}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Phone:</span> ${data.phone}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Parent First Name:</span> ${data.parentFirstName}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Parent Last Name:</span> ${data.parentLastName}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Parent Email:</span> ${data.parentEmail}</p>
    <p><span style="font-weight: semibold; background-color: #f8fafc;">Parent Phone:</span> ${data.parentPhone}</p>
  </div>
      `;
  } catch (error) {
    console.error("Error generating HTML content:", error);
    return ""; // Return empty string or handle the error as appropriate
  }
};

const generateMessage = (email, data, csvData, htmlContent) => {
  try {
    if (!data || !csvData || !htmlContent) {
      throw new Error("Invalid input data");
    }

    // Get the current season, which is based on the current date
    // If current date is before May 31st, the season is LastYear - ThisYear
    // If current date is after May 31st, the season is ThisYear - NextYear
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const season =
      currentMonth < 5
        ? `${currentYear - 1} - ${currentYear}`
        : `${currentYear} - ${currentYear + 1}`;

    return {
      to: email,
      from: email,
      subject: `${season} season registration`,
      text: "Here is the form submission.",
      html: htmlContent, // HTML version of the message
      attachments: [
        {
          content: Buffer.from(csvData).toString("base64"),
          filename: "form-data.csv",
          type: "text/csv",
          disposition: "attachment",
          contentId: "Form Data CSV File",
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

export { sendRegisterEmail };
