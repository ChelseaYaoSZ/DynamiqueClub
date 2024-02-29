"use strict";

// External imports
import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";

// Internal imports
import emailRoutes from "./routes/emailRoutes.js";

// Environment configuration
config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5002;

// Global middleware
app.use(cors());
app.use(json());

// Endpoint to test the server
app.get("/api", (req, res) => {
  res.send("Welcome to the Volleyball Dynamique Club server");
});

// Routes
app.use("/api/send-email", emailRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
