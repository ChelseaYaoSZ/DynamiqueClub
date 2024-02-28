"use strict";

// External imports
import { createTransport } from "nodemailer";
import { config } from "dotenv";

// Environment configuration
config();

// Configure your SMTP transporter
const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL_ACCOUNT,
    pass: process.env.USER_EMAIL_PASSWORD,
  },
});

export default transporter;