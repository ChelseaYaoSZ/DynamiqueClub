import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Integration with backend or alert for demonstration
    alert(`Subscribe with: ${email}`);
    // Reset email input after submission
    setEmail('');
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4 lg:mt-8">
      <span className="text-xl text-darkBlue font-semibold">GET ALL THE LATEST ON US</span>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="p-2  w-60 rounded-l focus:outline-none focus:border-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-white font-semibold text-customRed px-4 rounded-r -ml-1">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
