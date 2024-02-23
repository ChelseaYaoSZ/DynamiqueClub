import React from "react";

import Sidebar from "../components/Nav/Sidebar";
import MeetTheTeams from "../components/MeetTheTeams";

import Banner from "../components/Banner";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Banner />
      <MeetTheTeams />
    </div>
  );
};

export default Homepage;
