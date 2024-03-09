// useFetchBanners.js
import { useEffect, useState } from 'react';
import { getAllBanners } from '../utils/bannerService'; // Make sure to import from the correct location

const useFetchBanners = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const fetchedBanners = await getAllBanners();
        setBanners(fetchedBanners);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return { banners, loading, error };
};

export default useFetchBanners;
