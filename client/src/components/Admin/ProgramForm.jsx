import React, { useState, useEffect } from "react";

const ProgramForm = () => {
  const [isToggled, setIsToggled] = useState(false); // false for "Turn off", true for "Turn on"

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [formData, setFormData] = useState({
    programLevel: "",
    schedule: "",
    currentSession: "",
    cost: "",
    registerDisplay: "",
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
    console.log(programs);
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Program Form</h2>
      {/* Display Programs from Database */}
      <div className="mb-5 border h-36 bg-white"></div>
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
        <label className="block text-lg font-medium">
          Cost:
          <input
            onChange={handleChange}
            value={formData.cost}
            name="notification"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></input>
        </label>
        <div className="w-full bg-bgWhite text-lg font-medium rounded">
          <label className="flex items-center cursor-pointer gap-3">
            Register Display:
            <div className="relative">
              {/* Hidden checkbox */}
              <input
                type="checkbox"
                name="registerDisplay"
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
              {isToggled ? "Register open" : "Is full"}
            </div>
          </label>
        </div>
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
