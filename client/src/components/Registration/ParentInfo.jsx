import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const fields = [
  { name: "firstName", label: "First name", required: true },
  { name: "lastName", label: "Last name", required: true },
  { name: "email", label: "Email", required: true },
  { name: "phone", label: "Phone", required: true },
];

const ParentInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon
          icon={faVolleyballBall}
          className="text-customRed"
        />
        <h2 className="text-xl lg:text-2xl font-medium">PARENT INFORMATION:</h2>
      </div>
      <div className="grid grid-cols lg:grid-cols-2 gap-2 lg:gap-5">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="block text-base lg:text-lg text-gray-700">
              {field.label}
              {field.required && (
                <span className="text-gray-400"> (required)</span>
              )}
            </label>
            <input
              type={
                field.name === "email"
                  ? "email"
                  : field.name === "phone"
                  ? "tel"
                  : "text"
              }
              name={field.name}
              required={field.required}
              className="border p-2 rounded h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentInfo;
