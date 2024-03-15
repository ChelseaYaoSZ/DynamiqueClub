import React, { useState } from 'react';
import contact from "../assets/contact.png";

const UnsubscribePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Unsubscribe request received. This will be processed manually.');
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
      <h1 className="text-2xl font-semibold text-center mb-4">Unsubscribe from Our Newsletter</h1>
      <p className="text-gray-600 text-center mb-6">Please enter your email address to unsubscribe.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
          required
        />
        <div className="flex justify-center">
          <button type="submit" className="bg-customRed w-28 text-white font-medium p-2 rounded hover:bg-customBlue m-10">
            Unsubscribe
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UnsubscribePage;
