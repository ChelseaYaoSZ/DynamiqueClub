"use strict";

// External imports
import { Router } from "express";
import { google } from "googleapis";
import dotenv from "dotenv";

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

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/gmail.send"],
});

router.route("/").get((req, res) => {
  console.log("Redirecting to authentication URL...");
  console.log("Authentication URL:", authUrl);
  res.redirect(authUrl);
});

router.route("/callback").get(async (req, res) => {
  const { code } = req.query;
  console.log("Received authorization code:", code);

  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log("Access token retrieved successfully:", tokens);
    // Store tokens securely in session
    req.session.tokens = tokens;
    res.redirect("/success");
  } catch (error) {
    console.error("Error retrieving access token:", error);
    res.status(500).send("Error retrieving access token");
  }
});

router.route("/success").get((req, res) => {
  // Check if tokens are stored in session
  const tokens = req.session.tokens;
  if (tokens) {
    console.log("Access token found in session:", tokens);
    res.status(200).send("Access token retrieved successfully");
  } else {
    console.warn("Access token not found in session");
    res.status(401).send("Unauthorized");
  }
});

export default router;
