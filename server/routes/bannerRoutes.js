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
router.route("/add").post(async (req, res) => {
  console.log(req.body);
  const { num, eventTitle,eventTitle_fr, imageURL } = req.body;
  console.log(num, eventTitle,eventTitle_fr,imageURL);
  try {
    const newBanner = new Banner({
      num:num,
      eventTitle: eventTitle,
      eventTitle_fr: eventTitle_fr,
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
router.route("/getAll").get(async (req, res) => {
  try {
    const banners = await Banner.find({});
    res.json(banners);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update banner by id
router.route("/update/:id").put(async (req, res) => {
  const { id } = req.params;
  const { eventTitle,eventTitle_fr,imageURL } = req.body;

  try {
    const updateBanner = await Banner.findByIdAndUpdate(
      id,
      { num: num, eventTitle: eventTitle, eventTitle_fr: eventTitle_fr,imageURL: imageURL },
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
