import React from "react";
import { useTranslation } from "react-i18next";
import OurMission from "../components/Club/OurMission";
import Coaches from "../components/Club/Coaches";
import OurSpirit from "../components/Club/OurSpirit";

const ClubPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8 py-8">
      <div className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6 text-[#060d30] ">
        <h2>{t('club.title')}</h2>
      </div>
      <div className="flex flex-col gap-4 lg:gap-16 max-w-72 sm:max-w-screen-sm lg:max-w-screen-lg">
        <OurMission />       
        <Coaches />
        <OurSpirit />
      </div>
    </div>
  );
};

export default ClubPage;
