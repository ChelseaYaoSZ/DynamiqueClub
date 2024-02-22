import React from "react";
import team1 from "../../assets/team1.png";

const TeamCard = () => {
  return (
    <div className="relative w-[160px] h-[239x] sm:w-[324px] sm:h-[450px] mb-10 ml-10 border-spacing-x-20 border-x-20 border-y-15 border-primary shadow-md shadow-slate-300">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={team1} alt="team" />
        <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-14  sm:-translate-y-24">
          <p className="text-white text-xs sm:text-2xl font-jetBrains font-extrabold transform translate-y-7 sm:translate-y-10">
            UNDER
          </p>
          <h2 className="text-customYellow text-5xl my-5 sm:text-110 font-monomaniac transform -translate-x-2">
            17'S
          </h2>
          <div className="w-[80px] h-[7px] sm:w-[161px] sm:h-[14px] text-[1px] rounded-md bg-customRed text-customRed transform -translate-y-3">
            red
          </div>
        </div>
      </div>

      <div className="h-[38px] sm:h-[75px] text-sm sm:text-2xl mt-2 text-darkBlue flex flex-col justify-around">
        <p>17 years old</p>
        <p>Grade 10/Sec. 4</p>
      </div>
    </div>
  );
};

export default TeamCard;
