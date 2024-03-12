import mongoose, { Schema } from "mongoose";

const programSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: "U17",
    enum: ["U17", "U16", "U14", "U13", "DEV2", "DEV1"],
  },

  schedule: { type: String, required: true },
  current_session: { type: String, required: true },
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

programSchema.pre("save", function (next) {
  this.dateUpdated = Date.now();
  next();
});

const Program = mongoose.model("Program", programSchema);

export default Program;
