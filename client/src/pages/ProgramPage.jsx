import React from "react";
import TeamCards from "../components/MeetTeams/TeamCards";
import { useTranslation } from "react-i18next";

const ProgramPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <title className="w-full flex flex-col items-center justify-center ">
        <h3 className="text-3xl text-customRed text-center font-semibold mt-10 sm:text-4xl">
          {t("program.page.title")}
        </h3>

        <h4 className="w-10/12 max-w-screen-lg text-lg my-10 lg:text-2xl md:bg-white md:bg-opacity-45 md:py-5  md:px-20 rounded-lg">
          {t("program.page.desc")}
        </h4>
      </title>

      <TeamCards />
    </div>
  );
};

export default ProgramPage;
