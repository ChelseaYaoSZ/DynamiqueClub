import React from "react";
import { useTranslation } from "react-i18next";
import missionImage from "../../assets/ourMission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const OurMission = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      {/* For mobile mode or default mode */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex items-center text-customRed gap-2">
          <FontAwesomeIcon icon={faVolleyballBall} className="text-base" />
          <h2 className="text-lg font-semibold">{t("club.mission.title")}</h2>
          <hr className="flex-grow border-t border-customRed border-[1px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <img src={missionImage} alt="MissionImage" className="h-52 w-auto" />

          <div className="flex flex-col font-inter max-w-96 gap-2">
            <div className="font-black text-darkBlue text-xl pl-5">
              <p
                dangerouslySetInnerHTML={{ __html: t("club.mission.text") }}
              ></p>
            </div>

            <div className="text-sm pl-8">
              <ul className="list-disc">
                <li>{t("club.mission.1")}</li>
                <li>{t("club.mission.2")}</li>
                <li>{t("club.mission.3")}</li> 
                <li>{t("club.mission.4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For large screen mode */}
      <div className="hidden lg:flex lg:w-full">
        <div className="lg:w-1/2 flex justify-center">
          <img src={missionImage} alt="MissionImage" className="w-[400px]" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-2">
          <div className="flex items-center text-customRed ">
            <FontAwesomeIcon
              icon={faVolleyballBall}
              className="text-base lg:text-lg mr-2"
            />
            <h2 className=" text-lg lg:text-xl font-semibold mr-2">
              {t("club.mission.title")}
            </h2>
            <hr className="flex-grow border-t border-customRed border-[1px]" />
          </div>
          <div className="font-inter max-w-[1080px]">
            <div className="font-black text-darkBlue  text-xl lg:text-2xl pl-5">
              <p
                dangerouslySetInnerHTML={{ __html: t("club.mission.text") }}
              ></p>
            </div>

            <div className=" pl-8 pt-2">
              <ul className="list-disc">
              <li>{t("club.mission.1")}</li>
                <li>{t("club.mission.2")}</li>
                <li>{t("club.mission.3")}</li> 
                <li>{t("club.mission.4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
