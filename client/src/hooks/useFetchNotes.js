// useFetchNotes.js
import { useEffect, useState } from 'react';
import { getAllNotes } from '../utils/noteService'; // Make sure to import from the correct location

const useFetchNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getAllNotes();
        setNotes(fetchedNotes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return { notes, loading, error };
};

export default useFetchNotes;
