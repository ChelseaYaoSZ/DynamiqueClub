import React, { useState, useEffect } from "react";
import { updateNote } from "../../utils/noteService";
import useFetchNotes from "../../hooks/useFetchNotes";

const NoteForm = () => {
  const [formData, setFormData] = useState({
    note: "",
    buttonDisplay: false,
  });

  const { notes, loading, error } = useFetchNotes();

  const [currentNoteId, setCurrentNoteId] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState(false);

  useEffect(() => {
    if (notes && notes.length > 0) {
      const note = notes[0];
      setCurrentNoteId(note._id);
      setCurrentNote(note.note);
      setButtonDisplay(note.buttonDisplay);
      setFormData({ note: note.note, buttonDisplay: note.buttonDisplay });
      console.log("Notes fetched successfully:", note);
    }
  }, [notes]);

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p></p>;

  const handleButtonDisplayToggle = () => {
    setFormData({ ...formData, buttonDisplay: !buttonDisplay });
    setButtonDisplay(!buttonDisplay);
  };

  const handleNoteChange = (event) => {
    setFormData({
      ...formData,
      note: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateNote(currentNoteId, {
        note: formData.note.trim(),
        buttonDisplay: formData.buttonDisplay,
      });
      if (response) {
        console.log("Note saved successfully:", response);
        alert("Note saved successfully");
      } else {
        alert("Failed to save note");
      }
    } catch (error) {
      console.error("Failed to save note:", error);
      alert("Failed to save note");
    }
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Note Form</h2>
      <h3 className="block text-lg font-medium">Current Note:</h3>
      <div className="mt-1 block w-full h-32 border border-gray-300 rounded-md shadow-sm p-2">
        <p className="text-lg whitespace-pre-line">{currentNote}</p>
      </div>
      {/* Display specific Note from Database */}
      <form onSubmit={handleSubmit} id="note-form" className="space-y-4">
        <label className="block text-lg font-medium">
          New Note:
          <textarea
            value={formData.note}
            onChange={handleNoteChange}
            name="note"
            className="mt-1 block w-full h-32 border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
          <div className="w-full bg-bgWhite rounded py-4">
            <label className="flex items-center cursor-pointer gap-3">
              Button Display:
              <div className="relative">
                {/* Hidden checkbox */}
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only"
                  onChange={handleButtonDisplayToggle}
                  checked={buttonDisplay}
                  value={buttonDisplay}
                />
                {/* Line */}
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                {/* Dot */}
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              {/* Label */}
              <div className="ml-3 text-font-medium">
                {buttonDisplay ? "Turn on" : "Turn off"}
              </div>
            </label>
          </div>
        </label>
      </form>
      <div className="flex justify-center gap-10 pt-6">
        <button
          type="submit"
          className="bg-customRed text-white text-xl w-36 py-1 rounded hover:font-bold hover:bg-red-800"
          form="note-form"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
