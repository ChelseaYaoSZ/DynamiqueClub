"use strict";

// External imports
import { Router } from "express";
import dotenv from "dotenv";

// Internal imports
import { sendEmailWithRetry } from "../utils/emailHelpers.js";

// Environment configuration
dotenv.config();

// Initialize router
const router = Router();

// Endpoint to handle form data submission
router.route("/send").post(async (req, res) => {
  try {
    // Send email with retry
    await sendEmailWithRetry(req.body)
    console.log("Email sent successfully after retries");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Failed to send email after retries", error);
    res.status(500).send("Failed to send email");
  }
});

export default router;
