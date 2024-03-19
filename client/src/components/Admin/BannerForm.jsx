import React, { useState, useEffect } from "react";
import { updateBanner } from "../../utils/bannerService";
import { uploadImage } from "../../utils/imageUploadService";
import useFetchBanners from "../../hooks/useFetchBanners";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    imageURL: "",
  });

  const { banners, loading, error, reloadBanners } = useFetchBanners();

  const [currentBannerId, setCurrentBannerId] = useState("");
  const [currentBanner, setCurrentBanner] = useState("");

  useEffect(() => {
    if (banners && banners.length > 0) {
      console.log("Banners fetched successfully:", banners);
    }
  }, [banners]);

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p></p>;

  // Update for consistency
  const handleImageUpload = (e) => {
    const bannerImage = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      bannerImage: bannerImage,
    }));
    console.log(bannerImage);
  };

  // Handle other inputs
  const handleEventTitleChange = (event) => {
    setFormData({
      ...formData,
      eventTitle: event.target.value,
    });
  };

  const handleClick = (event) => {
    const banner = banners.find(
      (banner) => banner.eventTitle === event.target.innerText
    );
    console.log("Banner clicked:", banner);

    setCurrentBannerId(banner._id);
    setCurrentBanner(banner.eventTitle);
    setFormData({ eventTitle: banner.eventTitle, imageURL: banner.imageURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentBannerId) {
      alert("Please select a banner to update");
      return;
    }

    try {
      const uploadResponse = await uploadImage(
        currentBannerId, 
        formData.bannerImage,
      );
      
      if (uploadResponse.success) {
        console.log("New banner image uploaded:", uploadResponse.data.imageURL)
        const updateResponse = await updateBanner(currentBannerId, {
          eventTitle: formData.eventTitle,
          imageURL: uploadResponse.data.imageURL,
        });

        reloadBanners();

        console.log("Banner saved successfully:", updateResponse);
        alert("Banner saved successfully");
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
      <div className="mb-5 border bg-white text-sm">
        {/* Display all the banners info from Database */}
        <table className="divide-y divide-gray-200 font-medium w-full">
          <thead className="bg-gray-50 uppercase text-gray-500 tracking-wider">
            <tr>
              <th scope="col" className="py-4 px-2">
                Event Title
              </th>
              <th scope="col" className="py-4 px-2">
                Banner ImageURL
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {banners.map((banner, index) => (
              <tr key={index}>
                <td className="text-gray-900 py-4 px-2" onClick={handleClick}>
                  {banner.eventTitle}
                </td>
                <td className="text-gray-500 py-4 px-2">
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
      <form id="banner-form" onSubmit={handleSubmit} className="space-y-4">
        {/* New Event input */}
        <label className="block text-lg font-medium">Event title:</label>
        <textarea
          name="eventTitle"
          placeholder={currentBanner}
          value={formData.eventTitle}
          onChange={handleEventTitleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {/* Banner Image input */}
        <label className="block text-lg font-medium">Banner Image:</label>
        <input
          type="file"
          name="bannerImage"
          onChange={handleImageUpload}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </form>

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
