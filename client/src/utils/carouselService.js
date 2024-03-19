import axios from "axios";

const getAllCarousels = async () => {
  try {
    const response = await axios.get("/api/carousels/getAll");
    // Assuming a successful response has status 200
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      console.error("Unexpected response status:", response.status);
      return { success: false, error: `Unexpected response status: ${response.status}` };
    }
  } catch (error) {
    console.error("Failed to fetch carousels:", error);
    return { success: false, error: error.response ? error.response.data : error.message };
  }
};

const updateCarousel = async (id, carouselData) => {
  try {
    console.log(`Attempting to save carousel ${id}:`, carouselData);
    const response = await axios.put(`/api/carousels/update/${id}`, carouselData);
    // Assuming a successful update has status 200
    if (response.status === 200) {
      console.log("Carousel saved successfully", response.data);
      return { success: true, data: response.data };
    } else {
      console.error("Failed to save the carousel", response.data);
      return { success: false, error: `Unexpected response status: ${response.status}` };
    }
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    return { success: false, error: error.response ? error.response.data : error.message };
  }
};

export { getAllCarousels, updateCarousel };
