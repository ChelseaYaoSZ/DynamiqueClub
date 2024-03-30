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
    highlighter: "U17",
    age: "16-17 years old",
    grade: "Grade 10-11/Sec. 4-5",
  },
  {
    id: "u16",
    image: team2,
    highlighter: "U16",
    age: "15-16 years old",
    grade: "Grade 9-10/Sec. 3-4",
  },
  {
    id: "u15",
    image: team3,
    highlighter: "U15",
    age: "15 years old",
    grade: "Grade 8-9/Sec. 2-3",
  },
  {
    id: "u14",
    image: team4,
    highlighter: "U14",
    age: "13-14 years old",
    grade: "Grade 7-8/Sec. 1-2",
  },
  {
    id: "u13",
    image: team5,
    highlighter: "U13",
    age: "13 years old",
    grade: "Grade 7/Sec. 1",
  },
  {
    id: "dev",
    image: team6,
    highlighter: " DEV",
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
