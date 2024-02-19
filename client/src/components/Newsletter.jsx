import React from "react";
import Logo from "./NL/Logo";
import Contact from "./NL/Contact";
import Location from "./NL/Location";
import FollowUs from "./NL/FollowUs";
import Subscribe from "./NL/Subscribe";

const Newsletter = () => {
  return (
    <div className="flex-row inline-flex justify-center items-center gap-36 p-12 bg-customBlue">
      <Logo />
      <div className="flex-col inline-flex items-start relative">
        <div className="flex-row gap-28 inline-flex">
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
