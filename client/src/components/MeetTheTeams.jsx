import React from "react";
import { FaVolleyballBall } from "react-icons/fa";
import TeamCards from "./MeetTeams/TeamCards";

const MeetTheTeams = () => {
  return (
    <div className="w-11/12  flex flex-col justify-center items-center mb-10">
      <div className="w-11/12 sm:w-11/12 flex flex-row justify-between items-center max-w-screen-lg mx-auto text-darkBlue font-semibold my-5">
        <FaVolleyballBall className="text-customRed lg:text-2xl" />
        <p className=" lg:text-2xl ">MEET THE TEAMS</p>
        <div className="w-7/12 h-0.5 sm:w-9/12 md:w-4/5 lg:w-9/12 xl:w-4/5  lg:h-1 bg-customRed"></div>
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
