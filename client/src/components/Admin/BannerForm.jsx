import React, { useState, useEffect } from "react";
import { updateBanner } from "../../utils/bannerService";
import useFetchBanners from "../../hooks/useFetchBanners";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    imageURL: "",
  });

  const { banners, loading, error } = useFetchBanners();

  const [currentBannerId, setCurrentBannerId] = useState("");
  const [currentBanner, setCurrentBanner] = useState("");
  const [currentBannerImage, setCurrentBannerImage] = useState("");

  useEffect(() => {
    if (banners && banners.length > 0) {
      console.log("Banners fetched successfully:", banners);
    }
  }, [banners]);

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p></p>;

  // Update for consistency
  // const handleImageChange = (e) => {
  //   const bannerImage = e.target.files[0];
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     bannerImage: bannerImage,
  //   }));
  //   console.log(bannerImage);
  // };

  // Handle other inputs
  const handleEventTitleChange = (event) => {
    setFormData({
      ...formData,
      eventTitle: event.target.value,
    });
  };

  const handleImageURLChange = (event) => {
    setFormData({
      ...formData,
      imageURL: event.target.value,
    });
  };

  const handleClick = (event) => {
    const banner = banners.find(
      (banner) => banner.eventTitle === event.target.innerText
    );
    setCurrentBannerId(banner._id);
    setCurrentBanner(banner.eventTitle);
    setCurrentBannerImage(banner.imageURL);
    setFormData({ eventTitle: banner.eventTitle, imageURL: banner.imageURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentBannerId) {
      alert("Please select a banner to update");
      return;
    }

    try {
      const response = await updateBanner(currentBannerId, formData);
      if (response) {
        console.log("Banner saved successfully:", response);
        alert("Banner saved successfully");
      } else {
        alert("Failed to save banner");
      }
    } catch (error) {
      console.error("Failed to save banner:", error);
      alert("Failed to save banner");
    }
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Banner Form</h2>
      {/* Display all the banners info from Database */}
      <div className="mb-5 border h-36 bg-white">
        {/* Display all the banners info from Database */}
        <div className="mb-5 border bg-white">
          <div>
            {/* Display all the banners info in a table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Banner ImageURL
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {banners.map((banner, index) => (
                  <tr key={index}>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      onClick={handleClick}
                    >
                      {banner.eventTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href={banner.imageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {banner.imageURL}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <form id="banner-form" onSubmit={handleSubmit} className="space-y-4">
        {/* New Event input */}
        <label className="block text-lg font-medium">
          Event title:
          <input
            name="eventTitle"
            placeholder={currentBanner}
            value={formData.eventTitle}
            onChange={handleEventTitleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>

        {/* New Image URL input */}
        <label className="block text-lg font-medium">
          Banner ImageURL:
          <input
            name="imageURL"
            placeholder={currentBannerImage}
            value={formData.imageURL}
            onChange={handleImageURLChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>
      </form>
      {/* Banner Image input */}
      {/* <label className="block text-lg font-medium">
          Banner Image:
          <input
            type="file"
            name="bannerImage"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label> */}
      <div className="flex justify-center gap-10 pt-6">
        <button
          type="submit"
          form="banner-form"
          className="bg-customRed text-white text-xl w-36 py-1 rounded hover:font-bold hover:bg-red-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BannerForm;
