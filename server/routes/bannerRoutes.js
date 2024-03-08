"use strict";

// External imports
import { Router } from "express";
import dotenv from "dotenv";
import Banner from "../models/banner.js";

// Initialize router
const router = Router();
dotenv.config();
// Endpoints for banner
router.route("/").get((req, res) => {
  res.send("Banner service is running");
});
// Create a new banner
router.post("/add", async (req, res) => {
  console.log(req.body);
  const { eventTitle, imageURL } = req.body;
  console.log(eventTitle, imageURL);
  try {
    const newBanner = new Banner({
      eventTitle: eventTitle,
      imageURL: imageURL,
    });
    console.log(newBanner);
    await newBanner.save();
    res.status(201).send(newBanner);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Get all banners
router.get("/getALL", async (req, res) => {
  try {
    const banners = await Banner.find({});
    res.json(banners);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update banner by id
router.get("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { eventTitle, imageURL } = req.body;

  try {
    const updateBanner = await Banner.findByIdAndUpdate(
      id,
      { eventTitle: eventTitle, imageURL: imageURL },
      { new: true }
    );

    if (!updateBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json(updateBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
