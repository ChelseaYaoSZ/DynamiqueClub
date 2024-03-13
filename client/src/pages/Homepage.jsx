import React from "react";

import Introduce from "../components/Introduce";
import Carousels from "../components/Events/Carousels";
import MeetTheTeams from "../components/MeetTheTeams";

import Banner from "../components/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="w-full flex flex-col justify-center items-center">
        <Introduce />
        <Carousels />
        <MeetTheTeams />
      </div>
    </div>
  );
};

export default Homepage;
