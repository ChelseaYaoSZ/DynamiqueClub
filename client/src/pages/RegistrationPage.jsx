import React from "react";
import PlayerInfo from "../components/Registration/PlayerInfo";
import ParentInfo from "../components/Registration/ParentInfo";
import Waiver from "../components/Registration/Waiver";

const ResgistrationPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const csvData = convertToCSV([data]);
    console.log(csvData);

    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/csv',
      },
      body: csvData,
    });

    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Failed to submit form');
    }

  };

  const convertToCSV = (objArray) => {
    const array = [Object.keys(objArray[0])].concat(objArray);
    return array.map(it => {
      return Object.values(it).toString();
    }).join('\n');
  }
  

  return (
    <div className="flex flex-col justify-center items-center py-8 lg:p-20 gap-4">
      <div className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6">
        <h2>Registration Form</h2>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 max-w-[950px] bg-bgWhite p-10">
        <form onSubmit={handleSubmit} id="registration-form" className="flex flex-col gap-4 lg:gap-8">
          <PlayerInfo />
          <ParentInfo />
          <Waiver />
        </form>
        <button
          className="bg-customRed text-white py-2 px-4 rounded-lg max-w-28"
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
