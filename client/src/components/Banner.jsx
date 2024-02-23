import React from "react";
import LatestNews from "./BN/LatestNews";
import ClubName from "./BN/ClubName";
import backgroundImage from "../assets/banner1.png";

const Banner = () => {
  return (
    <div
      className="flex lg:justify-end bg-cover bg-no-repeat w-full h-96"
      style={{ backgroundImage: `url(${backgroundImage})` }}
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
  );
};

export default Banner;
