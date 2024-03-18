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
router.route("/").get((req, res) => {
  res.send("Email service is running");
});

router.route("/register").post(async (req, res) => {
  try {
    // Send email with retry
    await sendEmailWithRetry(process.env.EMAIL_ACCOUNT, req.body, process.env.SENDGRID_API_KEY)
    console.log("Email sent successfully after retries");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Failed to send email after retries", error);
    res.status(500).send("Failed to send email");
  }
});

router.route("/subscribe").post(async (req, res) => {
  try {
    // Send email with retry
    await sendEmailWithRetry(process.env.EMAIL_ACCOUNT, req.body, process.env.SENDGRID_API_KEY)
    console.log("Email sent successfully after retries");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Failed to send email after retries", error);
    res.status(500).send("Failed to send email");
  }
});

export default router;
