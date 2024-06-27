import React from "react";
import { useTranslation } from "react-i18next";
import { FaVolleyballBall } from "react-icons/fa";
import TeamCards from "./MeetTeams/TeamCards";

const MeetTheTeams = () => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12  flex flex-col justify-center items-center max-w-screen-lg mx-auto my-10">
      <div className="w-11/12 xl:w-full max-w-screen-lg flex items-center text-customRed  gap-3 mb-4">
        <FaVolleyballBall className="text-base lg:text-lg " />
        <h2 className="text-lg lg:text-xl font-semibold  text-darkBlue">
          {t("home.meet_the_team.title")}
        </h2>
        <hr className="flex-grow border-t border-customRed border-[1px]" />
      </div>
      <div className="w-11/12 xl:w-full mb-3 shadow-md shadow-gray-400 text-base lg:text-2xl text-white bg-customRed py-3 px-4 lg:px-16 rounded ">
        <p>
          {t("home.meet_the_team.text")}
        </p>
      </div>

      <TeamCards />
    </div>
  );
};

export default MeetTheTeams;
