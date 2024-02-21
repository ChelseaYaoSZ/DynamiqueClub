import React from "react";
import Logo from "./NL/Logo";
import Contact from "./NL/Contact";
import Location from "./NL/Location";
import FollowUs from "./NL/FollowUs";
import Subscribe from "./NL/Subscribe";

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-36 p-12 bg-customBlue">
      <Logo />
      <div className="flex flex-col items-start">
        <div className="flex flex-col lg:flex-row justify-evently gap-4 lg:gap-28 py-4 lg:py-0">
          <Contact />
          <Location />
          <FollowUs />
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Newsletter;
