// useFetchCarousels.js
import { useEffect, useState } from 'react';
import { getAllCarousels } from '../utils/carouselService'; // Make sure to import from the correct location

const useFetchCarousels = () => {
  const [reload, setReload] = useState(false);
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reloadCarousels = () => setReload((prev) => !prev);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const { data } = await getAllCarousels();
        const fetchedCarousels = data;
        setCarousels(fetchedCarousels);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCarousels();
  }, [reload]);

  return { carousels, loading, error, reloadCarousels };
};

export default useFetchCarousels;
