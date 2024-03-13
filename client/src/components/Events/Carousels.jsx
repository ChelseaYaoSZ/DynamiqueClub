import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { FaVolleyballBall } from "react-icons/fa";
import useFetchCarousels from "../../hooks/useFetchCarousels";

// Settings for the react-slick carousel
const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
  // responsive breakpoints
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousels = () => {

  const sliderRef = useRef();

  // Function to go to the next slide
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const { carousels, loading, error } = useFetchCarousels();

  useEffect(() => {
    if (carousels && carousels.length > 0) {
      console.log("Carousels fetched successfully:", carousels);
    }
  }, [carousels]);

  if (loading) return <p>Loading carousels...</p>;
  if (error) return <p></p>;

  return (
    <div className="w-11/12  flex flex-col justify-center items-center max-w-screen-lg mx-auto my-10">
      <div className="w-11/12 xl:w-full max-w-screen-lg flex items-center text-customRed  gap-3 mb-4">
        <FaVolleyballBall className="text-base lg:text-lg " />
        <h2 className="text-lg lg:text-xl font-semibold  text-darkBlue">
          LATEST EVENTS & VIDEOS
        </h2>

        <hr className="flex-grow border-t border-customRed border-[1px]" />
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className="text-xl"
          onClick={previous}
        />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className="text-xl"
          onClick={next}
        />
      </div>

      <div className="w-11/12 2xl:w-full">
        <Slider ref={sliderRef} {...settings} className="">
          {carousels.map((e) => (
            <div key={e._id} style={{ margin: "0 10px" }}>
              <img
                src={e.imageURL}
                alt={`carousel ${e._id}`}
                className="border-8 border-primary rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousels;
