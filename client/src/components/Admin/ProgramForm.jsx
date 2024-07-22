import React, { useState } from "react";
import useFetchPrograms from "../../hooks/useFetchPrograms";
import { updateProgram } from "../../utils/programService";

const ProgramForm = () => {
  const { programs, loading, error } = useFetchPrograms();
  const [isToggled, setIsToggled] = useState(true); // false for "Is Full", true for "Register Open"

  console.log(programs);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [formData, setFormData] = useState({
    id: "",
    schedule: "",
    schedule_fr: "",
    current_session: "",
    current_session_fr: "",
    cost: "",
    cost_fr: "",
    registerDisplay: "",
  });

  const [currentProgramId, setCurrentProgramId] = useState("");
  const [currentProgramSchedule, setCurrentProgramSchedule] = useState("");
  const [currentProgramSession, setCurrentProgramSession] = useState("");
  const [currentCost, setCurrentCost] = useState("");
  const [currentProgramScheduleFr, setCurrentProgramScheduleFr] = useState("");
  const [currentProgramSessionFr, setCurrentProgramSessionFr] = useState("");
  const [currentCostFr, setCurrentCostFr] = useState("");
  const [registerDisplay, setRegisterDisplay] = useState("isToggled");

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p></p>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (!currentProgramId) {
      alert("Please select a program to update");
      return;
    }

    const programToUpdate = {
      ...formData,
      registerDisplay: isToggled,
    };

    try {
      const response = await updateProgram(currentProgramId, programToUpdate);
      if (response) {
        console.log("Program update successfully:", response);
        alert("Program update successfully");
      } else {
        alert("Failed to update banner");
      }
    } catch (error) {
      console.error("Failed to update program:", error);
      alert("Failed to update program");
    }
  };

  //Handle input changes
  const handleScheduleChange = (event) => {
    setFormData({
      ...formData,
      schedule: event.target.value,
    });
  };

  const handleCurrentSessionChange = (event) => {
    setFormData({
      ...formData,
      current_session: event.target.value,
    });
  };

  const handleCostChange = (event) => {
    setFormData({
      ...formData,
      cost: event.target.value,
    });
  };

  const handleScheduleFrChange = (event) => {
    setFormData({
      ...formData,
      schedule: event.target.value,
    });
  };

  const handleCurrentSessionFrChange = (event) => {
    setFormData({
      ...formData,
      current_session: event.target.value,
    });
  };

  const handleCostFrChange = (event) => {
    setFormData({
      ...formData,
      cost: event.target.value,
    });
  };

  const handleClick = (selectedProgramId) => {
    const selectedProgram = programs.find((p) => p.id === selectedProgramId);

    if (selectedProgram) {
      setCurrentProgramId(selectedProgram.id);
      setCurrentProgramSchedule(selectedProgram.schedule);
      setCurrentProgramSession(selectedProgram.current_session);
      setCurrentCost(selectedProgram.cost);
      setCurrentProgramScheduleFr(selectedProgram.schedule_fr);
      setCurrentProgramSessionFr(selectedProgram.current_session_fr);
      setCurrentCostFr(selectedProgram.cost_fr);
      setRegisterDisplay(selectedProgram.registerDisplay);

      setFormData({
        id: selectedProgram.id,
        schedule: selectedProgram.schedule,
        current_session: selectedProgram.current_session,
        cost: selectedProgram.cost,
        schedule_fr: selectedProgram.schedule_fr,
        current_session_fr: selectedProgram.current_session_fr,
        cost_fr: selectedProgram.cost_fr,
        registerDisplay: selectedProgram.registerDisplay,
      });
    }
  };
  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Program Form</h2>
      {/* Display Programs from Database */}
      {/* <div className="mb-5 border h-36 bg-white"></div> */}
      <table className="divide-y divide-gray-200 font-medium w-full bg-white">
        <thead className="bg-gray-50 uppercase text-gray-500 tracking-wider">
          <tr>
            <th scope="col" className="py-4 px-2">
              Program Level
            </th>
            <th scope="col" className="py-4 px-2">
              Schedule
            </th>
            <th scope="col" className="py-4 px-2">
              Schedule_fr
            </th>
            <th scope="col" className="py-4 px-2">
              Current Session
            </th>
            <th scope="col" className="py-4 px-2">
              Current Session_fr
            </th>
            <th scope="col" className="py-4 px-2">
              Cost
            </th>
            <th scope="col" className="py-4 px-2">
              Cost_fr
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {programs.map((program, index) => (
            <tr key={index} onClick={() => handleClick(program.id)}>
              <td className="text-gray-900 py-4 px-2">
                {program.id}
              </td>
              <td className="text-gray-900 py-4 px-2">{program.schedule}</td>
              <td className="text-gray-900 py-4 px-2">{program.schedule_fr}</td>
              <td className="text-gray-900 py-4 px-2">
                {program.current_session}
              </td>
              <td className="text-gray-900 py-4 px-2">
                {program.current_session_fr}
              </td>
              <td className="text-gray-900 py-4 px-2">{program.cost}</td>
              <td className="text-gray-900 py-4 px-2">{program.cost_fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={handleSubmit}
        id="program-form"
        className="space-y-4 mt-5"
      >
        <label className="block text-lg font-medium">
          Program Level:
          <input
            value={formData.id}
            name="id"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
            readOnly
          ></input>
        </label>
        <label className="block text-lg font-medium text-blue-700">
          Schedule:(English version)
          <input
            onChange={handleScheduleChange}
            placeholder={currentProgramSchedule}
            value={formData.schedule}
            name="schedule"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
          ></input>
        </label>
        <label className="block text-lg font-medium text-red-600">
          Schedule:(French version)
          <input
            onChange={handleScheduleFrChange}
            placeholder={currentProgramScheduleFr}
            value={formData.schedule_fr}
            name="schedule_fr"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
          ></input>
        </label>
        <label className="block text-lg font-medium text-blue-700">
          Current Session:(English version)
          <input
            onChange={handleCurrentSessionChange}
            placeholder={currentProgramSession}
            value={formData.current_session}
            name="current_session"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
          ></input>
        </label>
        <label className="block text-lg font-medium text-red-600">
          Current Session:(French version)
          <input
            onChange={handleCurrentSessionFrChange}
            placeholder={currentProgramSessionFr}
            value={formData.current_session_fr}
            name="current_session_fr"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
          ></input>
        </label>
        <label className="block text-lg font-medium text-blue-700">
          Cost:(English version)
          <input
            onChange={handleCostChange}
            placeholder={currentCost}
            value={formData.cost}
            name="cost"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
          ></input>
        </label>
        <label className="block text-lg font-medium text-red-600">
          Cost:(French version)
          <input
            onChange={handleCostFrChange}
            placeholder={currentCostFr}
            value={formData.cost_fr}
            name="cost_fr"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-800"
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
