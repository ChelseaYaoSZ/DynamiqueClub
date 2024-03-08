import axios from "axios";

const getAllNotes = async () => {
  try {
    const response = await axios.get("/api/notes/getAll");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }
};

const updateNote = async (id, noteData) => {
  try {
    console.log(`Attempting to save note ${id}:`, noteData);
    const response = await axios.put(`/api/notes/update/${id}`, noteData);

    if (response.status === 200) {
      console.log("Note saved successfully", response.data);
    } else {
      console.error("Failed to save the note", response.data);
    }
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export { getAllNotes, updateNote };
