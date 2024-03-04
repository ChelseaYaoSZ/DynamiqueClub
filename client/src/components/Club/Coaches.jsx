import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolleyballBall,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import CoachCard from "./CoachCard";
import coaches from "../../data/coaches";

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

const Coaches = () => {
  const sliderRef = useRef();

  // Function to go to the next slide
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      {/* Title Section */}
      <div className="flex items-center text-customRed w-full gap-3 mb-4">
        <FontAwesomeIcon icon={faVolleyballBall} className="text-base lg:text-lg" />
        <h2 className="text-lg lg:text-xl font-semibold">Meet Our Coaches</h2>
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

      {/* CoachCard Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {coaches.map((coach) => (
          <CoachCard
            id={coach.id}
            name={coach.name}
            title={coach.title}
            section={coach.section}
            email={coach.email}
            image={coach.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Coaches;
