"use strict";

// External imports
import { Router } from "express";
import dotenv from "dotenv";

// Internal imports
import {
  conditionalCheckAccessToken,
  convertToCSV,
  generateHtmlContent,
  getMailOptions,
  getRetryOperation,
  getTransporter,
  sendEmailWithRetry,
} from "../utils/emailHelpers.js";

// Environment configuration
dotenv.config();

// Initialize router
const router = Router();

const accessType = process.env.NODEMAILER_ACCESS_TYPE || "AppPassword";

// Endpoint to handle form data submission
router.route("/").post(conditionalCheckAccessToken, async (req, res) => {
  try {
    // Extract form data
    const data = req.body;
    console.log("Form data extracted:", data);

    // Convert form data to CSV
    const csvData = convertToCSV([data]);
    console.log("CSV data generated:", csvData);

    // Generate HTML content for email
    const htmlContent = generateHtmlContent(data);
    console.log("HTML content generated:", htmlContent);

    // Configure email options
    const mailOptions = getMailOptions(data, csvData, htmlContent);
    console.log("Mail options configured:", mailOptions);

    // Initialize retry operation
    const operation = getRetryOperation();
    console.log("Retry operation initialized:", operation);

    // Initialize transporter
    const transporter = getTransporter(accessType, req);
    console.log("Transporter initialized for access type:", accessType);

    // Send email with retry
    await sendEmailWithRetry(transporter, mailOptions, operation);
    console.log("Email sent successfully");

    // Send response
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

export default router;
