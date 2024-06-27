import React from "react";
import TeamCard from "./TeamCard";
import { useTranslation } from "react-i18next";

import programData from "../../data/programData";

const TeamCards = () => {
  const { t } = useTranslation();
  return (
    <div className="w-10/12 max-w-screen-lg mx-auto lg:w-full mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-3 lg:gap-x-15 lg:gap-y-5 justify-items-center">
        {programData.map((program) => (
          <TeamCard key={program.id} program={{
            ...program,
            name: t(program.name),
            highlighter: program.highlighter,
            age: t(program.age),
            grade: t(program.grade),
            image: program.image,
            id: program.id
          }} />
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
