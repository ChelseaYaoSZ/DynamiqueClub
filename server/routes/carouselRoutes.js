"use strict";

// External imports
import { Router } from "express";
import dotenv from "dotenv";
import Carousel from "../models/carousel.js";

// Initialize router
const router = Router();
dotenv.config();

// Endpoints for carousel
router.route("/").get((req, res) => {
  res.send("Carousel service is running");
});

// Create a new carousel
router.route("/add").post(async (req, res) => {
  console.log(req.body);
  const { num, imageURL } = req.body;
  console.log(num, imageURL);
  try {
    const newCarousel = new Carousel({
      num: num,
      imageURL: imageURL,
    });
    console.log(newCarousel);
    await newCarousel.save();
    res.status(201).send(newCarousel);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Get all carousels
router.route("/getAll").get(async (req, res) => {
  try {
    const carousels = await Carousel.find({});
    res.json(carousels);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update carousel by id
router.route("/update/:id").put(async (req, res) => {
  const { id } = req.params;
  const { num, imageURL } = req.body;

  try {
    const updateCarousel = await Carousel.findByIdAndUpdate(
      id,
      { num: num, imageURL: imageURL },
      { new: true }
    );

    if (!updateCarousel) {
      return res.status(404).json({ message: "Carousel not found" });
    }
    res.json(updateCarousel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
