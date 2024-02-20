import React from "react";
import Logo from "./NL/Logo";
import Contact from "./NL/Contact";
import Location from "./NL/Location";
import FollowUs from "./NL/FollowUs";
import Subscribe from "./NL/Subscribe";

const Newsletter = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-36 p-12 bg-customBlue">
      <Logo />
      <div className="flex flex-col items-start relative">
        <div className="flex flex-row justify-evently gap-28">
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
