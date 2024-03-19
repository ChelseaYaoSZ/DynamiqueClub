// useFetchBanners.js
import { useEffect, useState } from "react";
import { getAllBanners } from "../utils/bannerService"; // Make sure to import from the correct location

const useFetchBanners = () => {
  const [reload, setReload] = useState(false);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reloadBanners = () => setReload((prev) => !prev);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const { data } = await getAllBanners();
        const fetchedBanners = data;
        setBanners(fetchedBanners);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBanners();
  }, [reload]);

  return { banners, loading, error, reloadBanners };
};

export default useFetchBanners;
