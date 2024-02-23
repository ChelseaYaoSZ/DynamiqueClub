import React from "react";
import LatestNews from "./BN/LatestNews";
import ClubName from "./BN/ClubName";
import backgroundImage from "../assets/banner1.png";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  const images = [
    { id: 1, url: backgroundImage },
    { id: 2, url: backgroundImage },
    { id: 3, url: backgroundImage },
  ];

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
        {images.map((image) => (
          <div
            className="flex lg:justify-end bg-cover bg-no-repeat w-full h-auto"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="flex flex-col p-12 gap-4 lg:w-1/2">
              <div className="hidden lg:block">
                <ClubName />
              </div>
              <div>
                <LatestNews />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
