import mongoose, { Schema } from "mongoose";

const programSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: "U17",
    enum: ["U17", "U16", "U15","U14", "U13", "DEV"],
  },

  schedule: { type: String, required: true },
  current_session: { type: String, required: true },
  cost: { type: String, required: true },
  registerDisplay: {
    type: Boolean,
    required: true,
    default: true, // Or false, depending on your default state
  },
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
