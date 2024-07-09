import React, { useState, useEffect } from "react";
import { updateCarousel } from "../../utils/carouselService";
import { uploadImage } from "../../utils/imageUploadService";
import useFetchCarousels from "../../hooks/useFetchCarousels";
import moment from "moment";
import 'moment/locale/en-ca';

const CarouselForm = () => {
  moment.locale('en-ca');
  const [formData, setFormData] = useState({
    num: 0,
    imageURL: "",
  });

  const { carousels, loading, error, reloadCarousels } = useFetchCarousels();

  const [currentCarouselId, setCurrentCarouselId] = useState("");
  const [currentCarousel, setCurrentCarousel] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    if (carousels && carousels.length > 0) {
      console.log("Carousels fetched successfully:", carousels);
    }
  }, [carousels]);

  if (loading) return <p>Loading carousels...</p>;
  if (error) return <p></p>;

  // Handle image upload
  const handleImageUpload = (e) => {
    const carouselImage = e.target.files[0];
    // validate bannerImage file type to be PNG
    if (carouselImage.type !== "image/png") {
      alert("Please upload a PNG file");
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      carouselImage: carouselImage,
    }));
    console.log(carouselImage);
  };

  // Handle other inputs
  const handleNumChange = (event) => {
    setFormData({
      ...formData,
      num: event.target.value,
    });
  };

  const handleClick = (selectedCarouselNum) => {
    const carousel = carousels.find(
      (carousel) => carousel.num === selectedCarouselNum
    );
    console.log("Carousel clicked:", carousel);
    setCurrentCarouselId(carousel._id);
    setCurrentCarousel(carousel.num);
    setLastUpdated(carousel.updatedAt);
    setFormData({ num: carousel.num, imageURL: carousel.imageURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentCarouselId) {
      alert("Please select a carousel to update");
      return;
    }

    try {
      const uploadResponse = await uploadImage(
        currentCarouselId,
        formData.carouselImage
      );

      if (uploadResponse.success) {
        console.log(
          "New carousel image uploaded:",
          uploadResponse.data.imageURL
        );
        const updateResponse = await updateCarousel(currentCarouselId, {
          num: formData.num,
          imageURL: uploadResponse.data.imageURL,
        });

        reloadCarousels();

        console.log("Carousel saved successfully:", updateResponse);
        alert("Carousel saved successfully");
      }
    } catch (error) {
      console.error("Failed to save carousel:", error);
      alert("Failed to save carousel");
    }
  };

  return (
    <div className="w-full bg-bgWhite rounded shadow-md p-10 my-10 border">
      <h2 className="text-2xl font-medium mb-4 text-center">Carousel Form</h2>
      {/* Display all the carousels info from Database */}
      <div className="mb-5 border bg-white text-sm">
        <table className="divide-y divide-gray-200 font-medium w-full">
          <thead className="bg-gray-50 uppercase text-gray-500 tracking-wider">
            <tr>
              <th scope="col" className="py-4 px-2">
                Number
              </th>
              <th scope="col" className="py-4 px-2">
                Carousel ImageURL
              </th>
              <th scope="col" className="py-4 px-2">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {carousels.map((carousel, index) => (
              <tr key={index} onClick={() => handleClick(carousel.num)}>
                <td className="text-gray-900 py-4 px-2">{carousel.num}</td>
                <td className="text-gray-500 py-4 px-2">
                  <img src={carousel.imageURL} alt={carousel.num} />
                </td>
                <td className="text-gray-900 py-4 px-2">
                  {moment(carousel.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form id="carousel-form" onSubmit={handleSubmit} className="space-y-4">
        {/* New Event input */}
        <label className="block text-lg font-medium">Number:</label>
        <input
          name="num"
          placeholder={currentCarousel}
          value={formData.num}
          onChange={handleNumChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
          readOnly
        />
        {/* Last update time display */}

        {/* Carousel Image input */}
        <label className="block text-lg font-medium">Carousel Image:</label>
        <input
          type="file"
          name="carouselImage"
          onChange={handleImageUpload}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </form>
      <div className="text-lg font-medium mt-4 text-customRed">
        Last Updated:{" "}
        {lastUpdated
          ? moment(lastUpdated).format("MMMM Do YYYY, h:mm:ss a")
          : "Not available"}
      </div>
      <div className="flex justify-center gap-10 pt-10">
        <button
          type="submit"
          form="carousel-form"
          className="bg-customRed text-white text-xl w-36 py-1 rounded hover:font-bold hover:bg-red-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CarouselForm;
