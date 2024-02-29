"use strict";

// External imports
import { Router } from "express";

// Internal imports
import transporter from "../utils/transporter.js";
import {
  convertToCSV,
  generateHtmlContent,
  setupMailOptions,
  sendEmail,
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
    const mailOptions = setupMailOptions(data, csvData, htmlContent);

    // Send email
    await sendEmail(transporter, mailOptions);

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
