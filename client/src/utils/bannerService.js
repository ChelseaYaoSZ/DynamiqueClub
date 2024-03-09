import axios from "axios";

const getAllBanners = async () => {
  try {
    const response = await axios.get("/api/banners/getAll");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch banners:", error);
  }
};

const updateBanner = async (id, bannerData) => {
  try {
    console.log(`Attempting to save banner ${id}:`, bannerData);
    const response = await axios.put(`/api/banners/update/${id}`, bannerData);

    if (response.status === 200) {
      console.log("Banner saved successfully", response.data);
    } else {
      console.error("Failed to save the banner", response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export { getAllBanners, updateBanner };
