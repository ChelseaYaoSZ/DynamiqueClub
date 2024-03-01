"use strict";

// External imports
import { Router } from "express";
import dotenv from "dotenv";
import { google } from "googleapis";
import { createTransport } from "nodemailer";

// Internal imports
import { sendEmailWithRetry } from "../utils/emailHelpers.js";

// Environment configuration
dotenv.config();

// Initialize router
const router = Router();

// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/gmail.send"],
});

// Endpoint to test the server
router.route("/").get((req, res) => {
  res.send("Welcome to the Volleyball Dynamique Club server");
});

// Endpoint to handle form data submission
router.route("/send-email").post(async (req, res) => {
  try {
    console.log("Authentication URL:", authUrl);
    const token = await oauth2Client.getAccessToken();
    console.log("Access token:", token);
    const accessToken = token.token || process.env.GOOGLE_ACCESS_TOKEN;

    const accessType = process.env.NODEMAILER_ACCESS_TYPE || "AppPassword";
    console.log("Access type:", accessType);

    // Extract form data
    const data = req.body;
    console.log("Form data extracted:", data);

    // Initialize transporter
    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_EMAIL_ACCOUNT,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log("Transporter initialized:", transporter);

    // Send email with retry
    await sendEmailWithRetry(data, transporter);
    console.log("Email sent successfully");

    // Send response
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send response
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Authentication endpoints
router.route("/auth/google").get((req, res) => {
  res.redirect(authUrl);
});

router.route("/auth/google/callback").get(async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  req.session.tokens = tokens;
  res.redirect("/send-email");
  res.send("Authentication successful. You can now send emails.");
});

export default router;
