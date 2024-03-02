import React from "react";
import OurMission from "../components/Club/OurMission";
import Coaches from "../components/Club/Coaches";

const ClubPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10 py-8">
      <div className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6">
        <h2>CLUBS & COACHING</h2>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 max-w-72 sm:max-w-screen-sm lg:max-w-screen-lg">
        <OurMission />
        
        <Coaches />
      </div>
    </div>
  );
};

export default ClubPage;
