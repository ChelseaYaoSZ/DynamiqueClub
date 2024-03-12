const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema({
  level: {
    type: String,
    required: true,
    default: "U17 Competitive",
    enum: [
      "U16 Competitive",
      "U14 Competitive",
      "U13 Competitive",
      "DEV1",
      "DEV2",
    ],
  },
  schedule: { type: String, required: true },
  current_session: { type: [String], required: true },
  cost: { type: String, required: true },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Program", programSchema);
