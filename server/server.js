const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config()

// Middleware to parse text/plain content (for our CSV data)
app.use(express.text({ type: 'text/csv' }));

// Endpoint to handle form data submission
app.post('/send-email', async (req, res) => {
  // Configure your SMTP transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // or 465 for SSL
    secure: true, // true for 465, false for other ports
    auth: {
      user: "szyao416@gmail.com", // your email
      pass: process.env.GMAIL_APP_PASSWORD, // your email password
    },
  });

  // Setup email data
  let mailOptions = {
    from: 'Volleyball Dynamique Club',
    to: "szyao416@gmail.com", // List of recipients
    subject: "Form Submission",
    text: "Here is the form submission.",
    attachments: [
      {
        filename: 'form-data.csv',
        content: req.body,
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

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
