import React, { useState } from "react";
import contact from "../assets/contact.png";
import { sendUnsubscriptionEmail } from "../utils/emailService";

const UnsubscribePage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendUnsubscriptionEmail({
        email: email,
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
    setEmail("");
  };

  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div>
        <img
          src={contact}
          alt="contactImgae"
          className="w-full mb-10 sm:mb-0"
        />
      </div>
      <div className="mt-10 p-5  bg-bgWhite rounded shadow-lg w-96 max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Unsubscribe from Our Newsletter
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter your email address to unsubscribe.
        </p>
        <form
          id="unsubscribe-form"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              form="unsubscribe-form"
              className="bg-customRed w-28 text-white font-medium p-2 rounded hover:bg-customBlue m-10"
            >
              Unsubscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UnsubscribePage;
