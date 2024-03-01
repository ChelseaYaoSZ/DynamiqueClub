import React from "react";
import TeamCard from "./TeamCard";

import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";

const teamsdata = [
  {
    id: "u17",
    image: team1,
    highlighter: "17'S",
    age: "17 years old",
    grade: "Grade 10/Sec. 4",
  },
  {
    id: "u16",
    image: team2,
    highlighter: "16'S",
    age: "16 years old",
    grade: "Grade 10/Sec. 4",
  },
  {
    id: "u14",
    image: team3,
    highlighter: "14'S",
    age: "14 years old",
    grade: "Grade 10/Sec. 4",
  },
  {
    id: "u13",
    image: team4,
    highlighter: "13'S",
    age: "13 years old",
    grade: "Grade 10/Sec. 4",
  },
  {
    id: "dev1",
    image: team5,
    highlighter: " DEV1",
    age: "All Ages",
    grade: "",
  },
  {
    id: "dev2",
    image: team6,
    highlighter: " DEV2",
    age: "All Ages",
    grade: "",
  },
];

const TeamCards = () => {
  return (
    <div className="sm:w-10/12 md:w-11/12 max-w-screen-lg mx-auto w-full mb-10">
      <div className="grid grid-cols-2 gap-3  lg:grid-cols-3 lg:gap-x-15 lg:gap-y-5 justify-items-center">
        {teamsdata.map((program) => (
          <TeamCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
