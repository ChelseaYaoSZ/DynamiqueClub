import express from 'express';
import Note from '../models/note.js'; // Adjust the path as necessary

const router = express.Router();

// POST: Create a new note
router.post('/add', async (req, res) => {
  const { note, buttonDisplay } = req.body;
  try {
    const newNote = new Note({ note, buttonDisplay });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Fetch all notes
router.get('/getAll', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional routes for UPDATE and DELETE operations here...

// PUT: Update an existing note by ID
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { note, buttonDisplay } = req.body;
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(id, { note, buttonDisplay }, { new: true });
      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.json(updatedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

export default router;
