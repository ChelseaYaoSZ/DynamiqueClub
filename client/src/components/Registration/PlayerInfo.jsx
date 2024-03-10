import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import {
  getExpectedDateRange,
  validateDateOfBirthAgainstLevel,
} from "../../utils/formValidation";

const fields = [
  { name: "firstName", label: "First name", required: true, type: "text" },
  { name: "lastName", label: "Last name", required: true, type: "text" },
  { name: "dateOfBirth", label: "Date of Birth", required: true, type: "date" },
  { name: "gender", label: "Gender", required: true, type: "select" },
  { name: "email", label: "Email", required: false, type: "email" },
  { name: "phone", label: "Phone", required: false, type: "tel" },
];

const PlayerInfo = ({ id }) => {
  // State additions
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [level, setLevel] = useState(id || ""); // Assuming `id` is the initial level ID
  const [validationMessage, setValidationMessage] = useState("");

  // Effect to run validation whenever dateOfBirth or level changes
  useEffect(() => {
    const isValidAge = validateDateOfBirthAgainstLevel(dateOfBirth, level);
    const expectedDateRange = getExpectedDateRange(level);
    setValidationMessage(
      isValidAge
        ? ""
        : `For ${level.toUpperCase()}, the expected age range is between ${
            expectedDateRange.start
          } and ${expectedDateRange.end}`
    );
  }, [dateOfBirth, level]);

  // Handle dateOfBirth and level change
  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const generateInputField = (field) => {
    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            required={field.required}
            defaultValue=""
            className="border p-2 rounded h-10"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="preferNotToAnswer">Prefer not to answer</option>
          </select>
        );

      case "date":
        return (
          <>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              onChange={handleDateOfBirthChange}
              className="border p-2 rounded h-10"
            />
            {validationMessage && (
              <div className="text-red-500">{validationMessage}</div>
            )}
          </>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            className="border p-2 rounded h-10"
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* level dropdown */}
      <div className="flex flex-col gap-3 pb-3 lg:pb-6">
        {/* level title */}
        <div className="flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faVolleyballBall} className="text-customRed" />
          <h2 className="text-xl lg:text-2xl font-medium">
            LEVEL OF PLAYER:
            <span className="text-base lg:text-lg text-gray-400">
              {" "}
              (required)
            </span>
          </h2>
        </div>
        {/* level choice */}
        <select
          name="level"
          defaultValue={level}
          onChange={handleLevelChange}
          required
          className="border p-2 rounded h-10"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="u17">U17 Competitive Team</option>
          <option value="u16">U16 Competitive Team</option>
          <option value="u14">U14 Competitive Team</option>
          <option value="u13">U13 Competitive Team</option>
          <option value="dev1">Development 1 Team</option>
          <option value="dev2">Development 2 Team</option>
          <option value="tryout">Tryout</option>
        </select>
      </div>
      {/* player info title */}
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon icon={faVolleyballBall} className="text-customRed" />
        <h2 className="text-xl lg:text-2xl font-medium">PLAYER INFORMATION:</h2>
      </div>
      {/* player info */}
      <div className="grid grid-cols lg:grid-cols-2 gap-2 lg:gap-5">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="block text-base lg:text-lg text-gray-700">
              {field.label}
              {field.required && (
                <span className="text-gray-400"> (required)</span>
              )}
            </label>
            {generateInputField(field)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerInfo;
