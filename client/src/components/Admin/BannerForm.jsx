import React, { useState, useEffect } from "react";
import { updateBanner } from "../../utils/bannerService";
import { uploadImage } from "../../utils/imageUploadService";
import useFetchBanners from "../../hooks/useFetchBanners";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    num: "",
    eventTitle: "",
    eventTitle_fr: "",
    imageURL: "",
  });

  const { banners, loading, error, reloadBanners } = useFetchBanners();

  const [currentBannerId, setCurrentBannerId] = useState("");
  const [currentBannerNum, setCurrentBannerNum] = useState("");
  const [currentBanner, setCurrentBanner] = useState("");
  const [currentBanner_fr, setCurrentBanner_fr] = useState("");

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
    // validate bannerImage file type to be PNG
    if (bannerImage.type !== "image/png") {
      alert("Please upload a PNG file");
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      bannerImage: bannerImage,
    }));
    console.log(bannerImage);
  };

// Handle other inputs
const handleNumChange = (event) => {
  setFormData({
    ...formData,
    num: event.target.value,
  });
};

  // Handle other inputs
  const handleEventTitleChange = (event) => {
    setFormData({
      ...formData,
      eventTitle: event.target.value,
    });
  };

   // Handle fr inputs
   const handleEventTitleFrChange = (event) => {
    setFormData({
      ...formData,
      eventTitle_fr: event.target.value,
    });
  };

  const handleClick = (selectedNum) => {
    const banner = banners.find(
      (banner) => banner.num === selectedNum
    );
    console.log("Banner clicked:", banner);

    setCurrentBannerId(banner._id);
    setCurrentBannerNum(banner.num);
    setCurrentBanner(banner.eventTitle);
    setCurrentBanner_fr(banner.eventTitle_fr);
    setFormData({ eventTitle: banner.eventTitle, eventTitle_fr:banner.eventTitle_fr, imageURL: banner.imageURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentBannerId) {
      alert("Please select a banner to update");
      return;
    }

    // if no image provided, only update the event title
    console.log("Form data:", formData)
    if (!formData.bannerImage) {
      try {
        const updateResponse = await updateBanner(currentBannerId, {
          num: formData.num,
          eventTitle: formData.eventTitle.trim(),
          eventTitle_fr: formData.eventTitle_fr.trim(),
          imageURL: formData.imageURL,
        });

        console.log("Banner saved successfully:", updateResponse);
        alert("Banner saved successfully");
        return;
      } catch (error) {
        console.error("Failed to save banner:", error);
        alert("Failed to save banner");
        return;
      }
    } else {
      try {
        const uploadResponse = await uploadImage(
          currentBannerId,
          formData.bannerImage
        );

        if (uploadResponse.success) {
          console.log(
            "New banner image uploaded:",
            uploadResponse.data.imageURL
          );
          const updateResponse = await updateBanner(currentBannerId, {
            num: formData.num,
            eventTitle: formData.eventTitle.trim(),
            eventTitle_fr: formData.eventTitle_fr.trim(),
            imageURL: uploadResponse.data.imageURL,
          });

          console.log("Banner saved successfully:", updateResponse);
          alert("Banner saved successfully");
        }
      } catch (error) {
        console.error("Failed to save banner:", error);
        alert("Failed to save banner");
      }
    }
    reloadBanners();
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
                Number
              </th>
              <th scope="col" className="py-4 px-2">
                Event Title(English Version)
              </th>
              <th scope="col" className="py-4 px-2">
                Event Title(French Version)
              </th>
              <th scope="col" className="py-4 px-2">
                Banner ImageURL
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {banners.map((banner, index) => (
              <tr key={index} onClick={() => handleClick(banner.num)}>
              <td className="text-gray-900 py-4 px-2" >
                  {banner.num}
                </td>
                <td className="text-gray-900 py-4 px-2" >
                  {banner.eventTitle}
                </td>
                <td className="text-gray-900 py-4 px-2">
                  {banner.eventTitle_fr}
                </td>
                <td className="text-gray-500 py-4 px-2">
                  <img src={banner.imageURL} alt={banner.eventTitle} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form id="banner-form" onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-lg font-medium">Number:</label>
        <input
          name="num"
          placeholder={currentBannerNum}
          value={formData.num}
          onChange={handleNumChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
          readOnly
        />
        {/* New Event input */}
        <label className="block text-lg font-medium text-blue-700">Event title:(English Version)</label>
        <textarea
          name="eventTitle"
          placeholder={currentBanner}
          value={formData.eventTitle}
          onChange={handleEventTitleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <label className="block text-lg font-medium  text-red-600">Event title:(French Version)</label>
        <textarea
          name="eventTitle_fr"
          placeholder={currentBanner_fr}
          value={formData.eventTitle_fr}
          onChange={handleEventTitleFrChange}
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
