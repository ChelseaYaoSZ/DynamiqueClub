import { Router } from "express";
import dotenv from "dotenv";
import Note from "../models/note.js"; // Adjust the path as necessary

const router = Router();
dotenv.config();

// Endpoints for note
router.route("/").get((req, res) => {
  res.send("Note service is running");
});

// POST: Create a new note, endpoint: /api/notes/add
router.route("/add").post(async (req, res) => {
  console.log(req.body);
  const { note, buttonDisplay } = req.body;
  console.log(note, buttonDisplay);
  try {
    const newNote = new Note({ note: note, buttonDisplay: buttonDisplay });
    console.log(newNote);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Fetch all notes
router.route("/getAll").get( async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional routes for UPDATE and DELETE operations here...

// P0ST: Update an existing note by ID, endpoint: /api/notes/update/:id
router.route("/update/:id").put(async (req, res) => {
  const { id } = req.params;
  const { note, buttonDisplay } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { note: note, buttonDisplay: buttonDisplay },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
