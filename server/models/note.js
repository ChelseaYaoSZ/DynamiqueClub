import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  buttonDisplay: {
    type: Boolean, 
    required: true,
  },
},
{
  timestamps: true, 
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
