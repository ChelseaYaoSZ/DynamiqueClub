import React from "react";
import { FaVolleyballBall } from "react-icons/fa";
import TeamCards from "./MeetTeams/TeamCards";

const MeetTheTeams = () => {
  return (
    <div className="w-11/12  flex flex-col justify-center items-center max-w-screen-lg mx-auto my-10">
      <div className="w-11/12 xl:w-full max-w-screen-lg flex items-center text-customRed  gap-3 mb-4">
        <FaVolleyballBall className="text-base lg:text-lg " />
        <h2 className="text-lg lg:text-xl font-semibold  text-darkBlue">
          MEET THE TEAMS
        </h2>
        <div className="h-0.5 lg:h-1 bg-customRed flex-grow"></div>
      </div>
      <div className="w-11/12 max-w-screen-lg mb-3 shadow-md shadow-gray-400 text-base lg:text-2xl text-white bg-customRed py-3 sm:py-5 px-2 sm:px-16 rounded ">
        <p>
          Based in Montreal, Dynamique Volleyball Club offers quality volleyball
          training for boys and girls ages from 11 to 18.
        </p>
      </div>

      <TeamCards />
    </div>
  );
};

export default MeetTheTeams;
