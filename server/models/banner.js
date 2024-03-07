"use strict";

// External imports
import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
  {
    event: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
