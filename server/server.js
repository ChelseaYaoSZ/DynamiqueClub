"use strict";

// External imports
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Internal imports
import emailRoutes from "./routes/emailRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import carouselRoutes from "./routes/carouselRoutes.js";
import programRoutes from "./routes/programRoutes.js";
import imageUploadRoutes from "./routes/imageUploadRoutes.js";

// Environment configuration
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 9000;

// Global middleware
app.use(cors());
app.use(json());
app.use("/upload", express.static("upload"));

// Routes
app.use("/api/email", emailRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/carousels", carouselRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/upload", imageUploadRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err))
  .finally(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  );
