"use strict";

// External imports
import { createTransport } from "nodemailer";
import { config } from "dotenv";

// Environment configuration
config();

// Configure your SMTP transporter
let transporter;
try {
  transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL_ACCOUNT,
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  });
} catch (error) {
  console.error("Error creating transporter:", error);
}

export default transporter;