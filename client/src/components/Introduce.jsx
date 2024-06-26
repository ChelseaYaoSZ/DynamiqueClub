import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaVolleyballBall } from "react-icons/fa";
import intro from "../assets/intro.png";

const Introduce = () => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-col justify-center items-center max-w-screen-lg mx-auto mt-10">
      <div className="w-11/12 xl:w-full flex items-center text-customRed  gap-3 mb-4">
        <FaVolleyballBall className="text-base lg:text-lg " />
        <h2 className="text-lg lg:text-xl font-semibold  text-darkBlue">
          {t("home.introduce.title")}
        </h2>

        <hr className="flex-grow border-t border-customRed border-[1px]" />
      </div>

      <div className="w-11/12 2xl:w-full flex flex-col lg:flex-row justify-center">
        <div className="lg:w-3/5">
          <img
            src={intro}
            alt="intro"
            className="object-cover w-full h-full rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md shadow-md"
          />
        </div>

        <div className="bg-customBlue lg:w-2/5 flex flex-col justify-center gap-2 px-6 py-4 lg:py-6 rounded-tr-none lg:rounded-tr-md rounded-br-md rounded-bl-md lg:rounded-bl-none">
          <div className="flex flex-col text-white bg-[#417999] px-4 py-4 lg:py-6 gap-4 rounded-sm">
            <h2
              className="font-bold font-inter text-xl lg:text-2xl 2xl:text-3xl"
              dangerouslySetInnerHTML={{ __html: t("home.introduce.subtitle") }}
            ></h2>
            <p className="font-inter font-light text-base lg:text-lg">
              {t("home.introduce.text")}
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <Link
              to="/club"
              className="bg-customRed text-white text-sm lg:text-base font-medium rounded px-2 py-1 hover:font-bold hover:bg-darkBlue"
            >
              {t("home.introduce.button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
