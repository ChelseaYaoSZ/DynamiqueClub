import React, { useState } from 'react';

const BannerForm = () => {
  const [formData, setFormData] = useState({
    time: '',
    newEvent: '',
    bannerImage: null,
  });

  // Update for consistency
  const handleImageChange = (e) => {
    setFormData(prevFormData => ({ ...prevFormData, bannerImage: e.target.files[0] }));
  };

  // Simplified example; adjust based on actual API and state management
  const handleSubmit = async (e, actionType) => {
    e.preventDefault();
    // Implement based on actionType ('add', 'update', 'delete')
    console.log(actionType, formData);
    // Reset formData here if necessary
  };

  // Handle other inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Banner Form</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Time input */}
        <label className="block text-lg font-medium">Post Time:
          <input name="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </label>
        {/* New Event input */}
        <label className="block text-lg font-medium">New Event:
          <input name="newEvent" value={formData.newEvent} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
        </label>
        {/* Banner Image input */}
        <label className="block text-lg font-medium">Banner Image:
          <input type="file" name="bannerImage" onChange={handleImageChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
        </label>
        <div className="flex justify-center gap-10 pt-6">
        <button onClick={(e) => handleSubmit(e, 'add')}  className="bg-customRed text-white px-6 py-1 rounded">Add</button>
        <button onClick={(e) => handleSubmit(e, 'update')}  className="bg-customRed text-white px-6 py-1 rounded">Update</button>
        <button onClick={(e) => handleSubmit(e, 'delete')}  className="bg-customRed text-white px-6 py-1 rounded">Delete</button>
        </div>
        
      </form>
    </div>
  );
};

export default BannerForm;
