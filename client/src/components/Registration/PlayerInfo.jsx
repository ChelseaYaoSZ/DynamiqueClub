import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const fields = [
  { name: "firstName", label: "First name", required: true, type: "text" },
  { name: "lastName", label: "Last name", required: true, type: "text" },
  { name: "dateOfBirth", label: "Date of Birth", required: true, type: "date" },
  { name: "gender", label: "Gender", required: true, type: "select" },
  { name: "email", label: "Email", required: false, type: "email" },
  { name: "phone", label: "Phone", required: false, type: "tel" },
];

const PlayerInfo = () => {
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
        <select name="level" defaultValue="" required className="border p-2 rounded h-10">
          <option value="" disabled>
            Select one
          </option>
          <option value="U17">U17 Competitive Team</option>
          <option value="U16">U16 Competitive Team</option>
          <option value="U14">U14 Competitive Team</option>
          <option value="U13">U13 Competitive Team</option>
          <option value="DEV1">Development 1 Team</option>
          <option value="DEV2">Development 2 Team</option>
          <option value="Tryout">Tryout</option>
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
            {field.type === "select" ? (
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
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                className="border p-2 rounded h-10"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerInfo;
