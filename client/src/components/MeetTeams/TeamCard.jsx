import React from "react";

const TeamCard = ({ data }) => {
  console.log(data.highlighter);
  return (
    <div className="relative w-[180px] h-[249px] card:w-[190px] card:h-[250px] sm:w-[270px] sm:h-[380px] md:w-[300px] md:h-[415px] xl:w-[324px] xl:h-[450px] mb-2  sm:border-spacing-x-20 border-12 sm:border-15 border-primary shadow-md shadow-slate-300">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={data.image} alt="team" />
        <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-14  sm:-translate-y-24">
          <p className="text-white text-xs sm:text-2xl font-jetBrains font-extrabold transform translate-y-7 sm:translate-y-10">
            UNDER
          </p>
          <h2 className="text-customYellow text-5xl my-5 sm:text-110 font-monomaniac text-center">
            {data.highlighter}
          </h2>
          <div className="w-[80px] h-[7px] sm:w-[161px] sm:h-[14px] text-[1px] rounded-md bg-customRed text-customRed transform -translate-y-3">
            red
          </div>
        </div>
      </div>

      <div className="h-[38px] sm:h-[75px] text-sm sm:text-2xl mt-2 text-darkBlue flex flex-col justify-around">
        <p>{data.age}</p>
        <p>{data.grade}</p>
      </div>
    </div>
  );
};

export default TeamCard;
