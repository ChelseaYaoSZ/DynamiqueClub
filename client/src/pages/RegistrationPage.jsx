import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PlayerInfo from "../components/Registration/PlayerInfo";
import ParentInfo from "../components/Registration/ParentInfo";
import Waiver from "../components/Registration/Waiver";
import {
  sendRegistrationEmail,
  sendSubscriptionEmail,
} from "../utils/emailService";
import { validateDateOfBirthAgainstLevel } from "../utils/formValidation";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const validateFormData = (data) => {
  // Validation logic here
  const isValidAge = validateDateOfBirthAgainstLevel(
    data.dateOfBirth,
    data.level
  );
  return isValidAge;
};

const ResgistrationPage = () => {
  const query = useQuery();
  const programId = query.get("programId");

  const [checked, setChecked] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const isValidData = validateFormData(data);

    if (isValidData) {
      
      try {
        console.log("data:", data);
        const response = await sendRegistrationEmail({
          ...data,
        });

        if (response.success) {
          alert(response.message);
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.error("Error submitting registration:", error);
        alert(
          "An error occurred while submitting the registration. Please try again later."
        );
      }

      if (checked) {
        try {
          const response = await sendSubscriptionEmail({
            email: data.parentEmail,
          });
  
          if (response.success) {
            alert(response.message);
          } else {
            alert(response.message);
          }
        } catch (error) {
          console.error("Error submitting subscription:", error);
          alert(
            "An error occurred while submitting the subscription. Please try again later."
          );
        }
      }
      
    } else {
      alert("Invalid form data. Please check the form and try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-8 lg:p-20 gap-4">
      <div className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6">
        <h2>Registration Form</h2>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 max-w-[950px] bg-bgWhite p-10">
        <form
          onSubmit={handleSubmit}
          id="registration-form"
          className="flex flex-col gap-4 lg:gap-8"
        >
          <PlayerInfo id={programId} />
          <ParentInfo />
          <div div className="flex flex-col gap-2">
            <Waiver />
            <div className="flex">
              <input
                type="checkbox"
                name="subscribe"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mr-2"
              />
              <label className="flex items-center font-medium text-sm lg:text-base">
                <p>
                  I would like to receive all the information regarding
                  Dynamique Club by email.{" "}
                  <span className="text-gray-400"> (optional)</span>
                </p>
              </label>
            </div>
          </div>
        </form>
        <button
          className="bg-customRed text-white py-2 px-4 rounded-lg max-w-28 hover:font-bold hover:bg-customBlue"
          type="submit"
          form="registration-form"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default ResgistrationPage;
