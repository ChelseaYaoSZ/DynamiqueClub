"use strict";

// External imports
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Internal imports
import emailRoutes from "./routes/emailRoutes.js";

// Environment configuration
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5002;

// Global middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api", emailRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
