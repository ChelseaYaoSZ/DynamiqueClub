import React from "react";
import TeamCards from "../components/MeetTeams/TeamCards";

const ProgramPage = () => {
  return (
    <div>
      <title className="w-full flex flex-col items-center justify-center ">
        <h3 className="text-3xl text-customRed text-center font-semibold mt-10 sm:text-5xl">
          Program
        </h3>

        <h4 className="w-10/12   max-w-screen-lg text-lg my-10 lg:text-3xl md:bg-white md:bg-opacity-45 md:py-5  md:px-20 rounded-lg">
          Our training programs cater to athletes of all skill level from 11 to
          18 years old, offering opportunities to enhance volleyball abilities
          with guidance from our seasoned coaches.
        </h4>
      </title>

      <TeamCards />
    </div>
  );
};

export default ProgramPage;
