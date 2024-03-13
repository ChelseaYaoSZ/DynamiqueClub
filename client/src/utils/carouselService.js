import axios from "axios";

const getAllCarousels = async () => {
  try {
    const response = await axios.get("/api/carousels/getAll");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch carousels:", error);
  }
};

const updateCarousel = async (id, carouselData) => {
  try {
    console.log(`Attempting to save carousel ${id}:`, carouselData);
    const response = await axios.put(`/api/carousels/update/${id}`, carouselData);

    if (response.status === 200) {
      console.log("Carousel saved successfully", response.data);
    } else {
      console.error("Failed to save the carousel", response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export { getAllCarousels, updateCarousel };
