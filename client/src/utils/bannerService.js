import axios from "axios";

const getAllBanners = async () => {
  try {
    const response = await axios.get("/api/banners/getAll");
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

const updateBanner = async (id, bannerData) => {
  try {
    console.log(`Attempting to save banner ${id}:`, bannerData);
    const response = await axios.put(`/api/banners/update/${id}`, bannerData);
    // Assuming a successful update has status 200
    if (response.status === 200) {
      console.log("Banner saved successfully", response.data);
      return { success: true, data: response.data };
    } else {
      console.error("Failed to save the banner", response.data);
      return { success: false, error: `Unexpected response status: ${response.status}` };
    }
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    return { success: false, error: error.response ? error.response.data : error.message };
  }
};

export { getAllBanners, updateBanner };
