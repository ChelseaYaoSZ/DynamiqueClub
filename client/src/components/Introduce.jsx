import React from "react";
import { Link } from "react-router-dom";
import { FaVolleyballBall } from "react-icons/fa";
import intro from "../assets/intro.png";

const Introduce = () => {
  return (
    <div className="w-11/12  flex flex-col justify-center items-center max-w-screen-lg mx-auto mt-10">
      <div className="w-11/12 xl:w-full flex items-center text-customRed  gap-3 mb-4">
        <FaVolleyballBall className="text-base lg:text-lg " />
        <h2 className="text-lg lg:text-xl font-semibold  text-darkBlue">
          INTRODUCING OUR CLUB
        </h2>

        <div className="h-0.5 lg:h-1 bg-customRed flex-grow"></div>
      </div>

      <div className="w-11/12 2xl:w-full flex flex-col sm:flex-row justify-center mx-auto">
        <div className="flex flex-grow  w-full">
          <img
            src={intro}
            alt="intro"
            className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
          />
        </div>

        <div className="bg-customBlue w-full sm:w-6/12 h-[240px] sm:h-[300px] lg:h-[362px] flex flex-col gap-1 mx-auto rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
          <div className="flex flex-row w-4/5 ml-10 md:ml-5 gap-2  items-center pt-4">
            <h3 className="text-customRed text-xs lg:text-base font-semibold">
              Dynamique Volleyball Club
            </h3>
            <div className=" h-[0.5px] lg:h-[2px] bg-customRed flex-grow"></div>
          </div>

          <div className="flex flex-col text-white bg-[#417999] w-4/5 md:w-10/12  items-start justify-center mx-auto p-3 mb-1">
            <h2 className=" font-bold text-lg xl:text-3xl mb-2">
              The place to be for young Volleyballers
            </h2>
            <p className=" text-xs lg:text-base">
              Since 2011, Dynamique club has aimed to grow the popularity and
              caliber of competitive volleyball in the Montreal area. Founded by
              players and managed by professionals, we offer coaching services
              for all and field high level competitive teams of all ages.
            </p>
          </div>

          <Link
            to="/club"
            className="bg-customRed  w-[45px] lg:w-[80px] text-center text-white text-[10px] lg:text-base font-medium rounded py-[2px]  hover:font-bold hover:bg-red-800 ml-9"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
