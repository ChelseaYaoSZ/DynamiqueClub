"use strict";

const convertToCSV = (objArray) => {
  const array = [Object.keys(objArray[0])].concat(objArray);
  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
};

const generateHtmlContent = (data) => {
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
};

const setupMailOptions = (data, csvData, htmlContent) => {
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
};

const sendEmail = async (transporter, mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};


export { convertToCSV, generateHtmlContent, setupMailOptions, sendEmail };