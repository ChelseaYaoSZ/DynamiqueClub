"use strict";

// External imports
import mongoose, { Schema } from "mongoose";

const carouselSchema = new Schema(
  {
    num: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Carousel = mongoose.model("Carousel", carouselSchema);

export default Carousel;
