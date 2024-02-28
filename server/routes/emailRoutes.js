"use strict";

// External imports
import { Router } from "express";

// Internal imports
import transporter from "../utils/transporter.js";
import { convertToCSV, generateHtmlContent, setupMailOptions } from "../utils/emailHelpers.js";

// Initialize router
const router = Router();

// Endpoint to handle form data submission
router.route("/").post(async (req, res) => {
  // Extract form data
  const data = req.body;
  const csvData = convertToCSV([data]);

  // Generate email content
  const htmlContent = generateHtmlContent(data);
  const mailOptions = setupMailOptions(data, csvData, htmlContent);

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Failed to send email");
    }
    res.send("Email sent successfully");
  });
});

export default router;
