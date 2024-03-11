import React from "react";
import OurMission from "../components/Club/OurMission";
import Coaches from "../components/Club/Coaches";
import OurSpirit from "../components/Club/OurSpirit";

const ClubPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8 py-8">
      <div className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6 text-[#060d30] ">
        <h2>CLUB & COACHING</h2>
      </div>
      <div className="flex flex-col gap-4 lg:gap-12 max-w-72 sm:max-w-screen-sm lg:max-w-screen-lg">
        <OurMission />       
        <Coaches />
        <OurSpirit />
      </div>
    </div>
  );
};

export default ClubPage;
