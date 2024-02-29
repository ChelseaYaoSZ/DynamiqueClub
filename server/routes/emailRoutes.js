"use strict";

// External imports
import { Router } from "express";

// Internal imports
import transporter from "../utils/transporter.js";
import {
  convertToCSV,
  generateHtmlContent,
  getMailOptions,
  getRetryOperation,
  sendEmail,
  sendEmailWithRetry,
} from "../utils/emailHelpers.js";

// Initialize router
const router = Router();

// Endpoint to handle form data submission
router.route("/").post(async (req, res) => {
  try {
    // Extract form data
    const data = req.body;
    const csvData = convertToCSV([data]);

    // Generate email content
    const htmlContent = generateHtmlContent(data);
    
    // Get mail options
    const mailOptions = getMailOptions(data, csvData, htmlContent);
    // Get retry operation
    const operation = getRetryOperation();

    // Send email
    await sendEmailWithRetry(transporter, mailOptions, operation);

    // Log success and send response
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

export default router;
