import React, { useState, useEffect } from "react";

const ProgramForm = () => {
  const [formData, setFormData] = useState({ 
    programLevel: "",
    schedule: "", 
    currentSession:"",
    });
  const [programs, setPrograms] = useState([]); // State to hold programs from the database

  useEffect(() => {
    // Fetch programs from your API
    const fetchPrograms = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();
        setPrograms(data); // Assuming the API returns an array of programs
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // Add logic to update the program in the database
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(name, value);
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Program Form</h2>
      {/* Display Programs from Database */}
      <div className="mb-5 border h-36 bg-white">
      </div>
      {/* Display specific Program info from Database */}
      <form onSubmit={handleSubmit} id="program-form" className="space-y-4">
        <label className="block text-lg font-medium">
         Program Level:
          <input
            onChange={handleChange}
            value={formData.programLevel}
            name="notification"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></input>
        </label>
        <label className="block text-lg font-medium">
        Schedule:
          <input
            onChange={handleChange}
            value={formData.schedule}
            name="notification"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></input>
        </label>
        <label className="block text-lg font-medium">
        Current Session:
          <input
            onChange={handleChange}
            value={formData.currentSession}
            name="notification"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></input>
        </label>
      </form>
      <div className="flex justify-center gap-10 pt-6">
        <button
          type="submit"
          className="bg-customRed text-white text-xl w-36 py-1 rounded hover:font-bold hover:bg-red-800"
          form="program-form"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProgramForm;
