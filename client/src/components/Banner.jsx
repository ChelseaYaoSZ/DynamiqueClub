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
            key={image.id}
            className="flex lg:justify-end bg-cover bg-no-repeat w-full h-96"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="flex flex-col p-10 gap-4 lg:w-1/2 justify-center">
              <div className="hidden lg:block">
                <ClubName />
              </div>
              <LatestNews id={image.id} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
