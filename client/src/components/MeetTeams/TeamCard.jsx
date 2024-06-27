import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeamCard = ({ program }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={`/program/${program.id}`}
      className="relative w-full mb-2 border-12 border-primary shadow-md shadow-slate-300 group"
    >
      <div className="w-full relative">
        <img
          src={program.image}
          alt="team"
          className="w-full object-cover"
          style={{ height: "auto" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
          <p className="text-white text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition duration-300 px-4 py-2 bg-customRed rounded-full">
            {t("common.program.button")}
          </p>
        </div>
      </div>
      <div className="w-full flex md:flex-col justify-between items-center md:items-start text-darkBlue mt-2 px-4 gap-2">
      <h2 className="text-4xl md:text-5xl font-monomaniac bg-gradient-to-r from-customRed to-darkBlue text-transparent bg-clip-text drop-shadow-lg animate-pulse">
          {program.highlighter}
        </h2>
        <p className="text-sm sm:text-xl underline underline-offset-4 md:no-underline decoration-customYellow">{program.grade}</p>
      </div>
    </Link>
  );
};

export default TeamCard;
