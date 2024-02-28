const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form data submission
app.post("/api/send-email", async (req, res) => {
  // Configure your SMTP transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // or 465 for SSL
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL_ACCOUNT, // your email
      pass: process.env.USER_EMAIL_PASSWORD, // your email password
    },
  });

  const data = req.body;
  console.log(data);
  const csvData = convertToCSV([data]);
  console.log(csvData);
  const currentDate = new Date().toLocaleString();

  const htmlContent = `
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

  // Setup email data
  let mailOptions = {
    from: "Volleyball Dynamique Club",
    to: "szyao416@gmail.com", // List of recipients
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

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Failed to send email");
    }
    res.send("Email sent successfully");
  });
});

const convertToCSV = (objArray) => {
  const array = [Object.keys(objArray[0])].concat(objArray);
  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
};

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
