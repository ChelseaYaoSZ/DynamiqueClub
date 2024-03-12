import axios from "axios";

const getAllPrograms = async () => {
  try {
    const response = await axios.get("/api/programs/all");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch programs:", error);
  }
};

const updateProgram = async (id, programData) => {
  try {
    console.log(`Attempting to save program ${id}:`, programData);
    const response = await axios.patch(`/api/programs/${id}`, programData);

    if (response.status === 200) {
      console.log("program saved successfully", response.data);
    } else {
      console.error("Failed to save the program", response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export { getAllPrograms, updateProgram };
