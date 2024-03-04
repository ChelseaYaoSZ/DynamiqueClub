import React from "react";

import Sidebar from "../components/Nav/Sidebar";
import Introduce from "../components/Introduce";
import Events from "../components/Events/Events";
import MeetTheTeams from "../components/MeetTheTeams";

import Banner from "../components/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="w-full flex flex-col justify-center items-center">
        <Introduce />
        <Events />
        <MeetTheTeams />
      </div>
    </div>
  );
};

export default Homepage;
