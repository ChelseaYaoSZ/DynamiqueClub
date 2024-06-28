"use strict";

// External imports
import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: true,
    },
    eventTitle_fr: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
