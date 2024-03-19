import React, { useState, useEffect } from "react";
import { updateCarousel } from "../../utils/carouselService";
import { uploadImage } from "../../utils/imageUploadService";
import useFetchCarousels from "../../hooks/useFetchCarousels";

const CarouselForm = () => {
  const [formData, setFormData] = useState({
    num: "",
    imageURL: "",
  });

  const { carousels, loading, error, reloadCarousels } = useFetchCarousels();

  const [currentCarouselId, setCurrentCarouselId] = useState("");
  const [currentCarousel, setCurrentCarousel] = useState("");

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

  const handleClick = (event) => {
    const carousel = carousels.find(
      (carousel) => carousel.num.toString() === event.target.innerText
    );
    console.log("Carousel clicked:", carousel);
    setCurrentCarouselId(carousel._id);
    setCurrentCarousel(carousel.num);
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
        console.log("New carousel image uploaded:", uploadResponse.data.imageURL)
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
        {/* Display all the carousels info from Database */}
        <table className="divide-y divide-gray-200 font-medium w-full">
          <thead className="bg-gray-50 uppercase text-gray-500 tracking-wider">
            <tr>
              <th scope="col" className="py-4 px-2">
                Number
              </th>
              <th scope="col" className="py-4 px-2">
                Carousel ImageURL
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {carousels.map((carousel, index) => (
              <tr key={index}>
                <td className="text-gray-900 py-4 px-2" onClick={handleClick}>
                  {carousel.num}
                </td>
                <td className="text-gray-500 py-4 px-2 ">
                  <a
                    href={carousel.imageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {carousel.imageURL}
                  </a>
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
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {/* Carousel Image input */}
        <label className="block text-lg font-medium">Carousel Image:</label>
        <input
          type="file"
          name="carouselImage"
          onChange={handleImageUpload}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </form>

      <div className="flex justify-center gap-10 pt-6">
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
