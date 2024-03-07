import React, { useState } from "react";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    bannerImage: null,
  });

  // Update for consistency
  const handleImageChange = (e) => {
    const bannerImage = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      bannerImage: bannerImage,
    }));
    console.log(bannerImage);
  };

  // Handle other inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(name, value);
  };

  // Simplified example; adjust based on actual API and state management
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement based on actionType ('add', 'update', 'delete')
    console.log(formData);
    // Reset formData here if necessary
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Banner Form</h2>
       {/* Display all the banners info from Database */}
       <div className="mb-5 border h-36 bg-white">
      </div>
      <form id="banner-form" onSubmit={handleSubmit} className="space-y-4">
        {/* New Event input */}
        <label className="block text-lg font-medium">
          Event title:
          <input
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>

        {/* Banner Image input */}
        <label className="block text-lg font-medium">
          Banner Image:
          <input
            type="file"
            name="bannerImage"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>
        <div className="flex justify-center gap-10 pt-6">
          <button
            type="submit"
            form="banner-form"
            className="bg-customRed text-white text-xl w-36 py-1 rounded hover:font-bold hover:bg-red-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BannerForm;
