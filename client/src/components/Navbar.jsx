import React from "react";
import Logo from "./Nav/Logo";
import Nav from "./Nav/Nav";
import SocialMedia from "./Nav/SocialMedia";
import Shadow from "./Nav/Shadow";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex-grow" style={{ flex: "2" }}>
          <Logo />
        </div>
        <div className="flex-grow" style={{ flex: "8" }}>
          <Nav />
        </div>
        <div className="flex-grow" style={{ flex: "1" }}>
          <SocialMedia />
        </div>
      </div>

      <div className="w-full">
        <Shadow />
      </div>
    </>
  );
};

export default Navbar;
