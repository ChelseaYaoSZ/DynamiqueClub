// useFetchCarousels.js
import { useEffect, useState } from 'react';
import { getAllCarousels } from '../utils/carouselService'; // Make sure to import from the correct location

const useFetchCarousels = () => {
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const fetchedCarousels = await getAllCarousels();
        setCarousels(fetchedCarousels);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCarousels();
  }, []);

  return { carousels, loading, error };
};

export default useFetchCarousels;
