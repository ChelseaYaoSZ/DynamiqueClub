import React, { useState } from "react";

const NoteForm = () => {
  const [formData, setFormData] = useState({ notification: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // Add logic to send data to the server
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(name, value);
  };
  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Note Form</h2>
      <form onSubmit={handleSubmit} id="note-form" className="space-y-4">
        <label className="block text-lg font-medium">
          Notification:
          <textarea
            onChange={handleChange}
            value={formData.notification}
            name="notification"
            className="mt-1 block w-full h-32 border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
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
