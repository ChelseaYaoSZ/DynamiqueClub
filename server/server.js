"use strict";

// External imports
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import { randomBytes } from "crypto";

// Internal imports
import emailRoutes from "./routes/emailRoutes.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js";

// Environment configuration
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5002;
const secretKey = randomBytes(32).toString("hex");

// Global middleware
app.use(cors());
app.use(json());
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

// Endpoint to test the server
app.get("/api", (req, res) => {
  res.send("Welcome to the Volleyball Dynamique Club server");
});

// Routes
app.use("/api/send-email", emailRoutes);
app.use("/api/auth/google", googleAuthRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
