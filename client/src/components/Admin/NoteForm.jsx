import React, { useState, useEffect } from "react";

const NoteForm = () => {
  const [isToggled, setIsToggled] = useState(false); // false for "Turn off", true for "Turn on"

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [formData, setFormData] = useState({
    notification: "",
    buttonDisplay: "",
  });
  const [notes, setNotes] = useState([]); // State to hold notes from the database

  useEffect(() => {
    // Fetch notes from your API
    const fetchNotes = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();
        setNotes(data); // Assuming the API returns an array of notes
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // Add logic to update the note in the database
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(name, value);
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Note Form</h2>
      {/* Display Notes from Database */}
      <div className="mb-5 border h-36 bg-white"></div>
      {/* Display specific Note from Database */}
      <form onSubmit={handleSubmit} id="note-form" className="space-y-4">
        <label className="block text-lg font-medium">
          Notification:
          <textarea
            onChange={handleChange}
            value={formData.notification}
            name="notification"
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
                  onChange={handleToggle}
                  checked={isToggled}
                />
                {/* Line */}
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                {/* Dot */}
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              {/* Label */}
              <div className="ml-3 text-font-medium">
                {isToggled ? "Turn on" : "Turn off"}
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
