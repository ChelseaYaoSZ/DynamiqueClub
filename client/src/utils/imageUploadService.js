import axios from "axios";

const uploadImage = async (id, image) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", image);

    const response = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Check for a successful response (status 200)
    if (response.status === 200) {
      console.log("Image uploaded successfully", response.data);
      return { success: true, data: response.data }; // Wrap the data in an object
    } else {
      // Handle unexpected response status
      console.error("Failed to upload the image", response.data);
      return {
        success: false,
        error: `Unexpected response status: ${response.status}`,
      }; // Return an error object
    }
  } catch (error) {
    // Handle errors from the request
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    return {
      success: false,
      error: error.response ? error.response.data : error.message,
    }; // Return an error object
  }
};

export { uploadImage };
