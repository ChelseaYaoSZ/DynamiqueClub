"use strict";

import retry from 'retry';

const convertToCSV = (objArray) => {
  try {
    if (!Array.isArray(objArray) || objArray.length === 0) {
      throw new Error('Input data must be a non-empty array');
    }

    const array = [Object.keys(objArray[0])].concat(objArray);
    return array
      .map((it) => {
        return Object.values(it).toString();
      })
      .join("\n");
  } catch (error) {
    console.error('Error converting data to CSV:', error);
    return ''; // Return empty string or handle the error as appropriate
  }
};


const generateHtmlContent = (data) => {
  try {
    // Ensure that all required fields are present in the data object
    const requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'parentFirstName', 'parentLastName', 'parentEmail', 'parentPhone'];
    requiredFields.forEach(field => {
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
    console.error('Error generating HTML content:', error);
    return ''; // Return empty string or handle the error as appropriate
  }
};


const getMailOptions = (data, csvData, htmlContent) => {
  try {
    if (!data || !csvData || !htmlContent) {
      throw new Error('Invalid input data');
    }

    const currentDate = new Date().toLocaleString();
    return {
      from: "Volleyball Dynamique Club",
      to: process.env.USER_EMAIL_ACCOUNT,
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
    console.error('Error setting up mail options:', error);
    return null; // Return null or handle the error as appropriate
  }
};

const sendEmail = async (transporter, mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Mail options:", mailOptions);
    throw error;
  }
};

const getRetryOperation = (retries = 0, factor = 2, minTimeout = 1000, maxTimeout = 60000, randomize = true) => {
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
        console.error(`Error sending email (attempt ${currentAttempt}):`, error);
        if (operation.retry(error)) {
          console.log(`Retrying email (attempt ${currentAttempt + 1})...`);
          return;
        }
        reject(operation.mainError());
      }
    });
  });
};

export { convertToCSV, generateHtmlContent, getMailOptions, getRetryOperation, sendEmail, sendEmailWithRetry };