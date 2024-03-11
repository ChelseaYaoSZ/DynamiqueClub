import React, { useEffect } from "react";
import LatestNews from "./BN/LatestNews";
import ClubName from "./BN/ClubName";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useFetchBanners from "../hooks/useFetchBanners";

const Banner = () => {

  const { banners, loading, error } = useFetchBanners();

  useEffect(() => {
    if (banners && banners.length > 0) {
      console.log("Banners fetched successfully:", banners);
    }
  }, [banners]);

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p></p>;

  const nextButtton = <FontAwesomeIcon icon={faChevronRight} />
  const prevButton = <FontAwesomeIcon icon={faChevronLeft} />

  return (
    <>
      <Carousel
        adaptiveHeight={true}
        autoplay={true}
        wrapAround={true}
        className="w-full"
        defaultControlsConfig={{ nextButtonText: nextButtton, prevButtonText: prevButton }}
      >
        {banners.map((banner) => (
          <div
            key={banner._id}
            className="flex lg:justify-end bg-cover bg-no-repeat w-full h-96"
            style={{ backgroundImage: `url(${banner.imageURL})` }}
          >
            <div className="flex flex-col px-10 gap-3 lg:w-1/2 justify-center">
              <div className="hidden lg:block">
                <ClubName />
              </div>
              <LatestNews date={banner.updatedAt} eventTitle={banner.eventTitle} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
