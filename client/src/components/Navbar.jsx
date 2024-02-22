import React, { useState } from "react";

import Logo from "./Nav/Logo";
import Nav from "./Nav/Nav";
import SocialMedia from "./Nav/SocialMedia";
import Sidebar from "./Nav/Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full shadow-md">
        <div className="flex-grow w-2/12">
          <Logo />
        </div>
        <div className="flex-grow w-8/12 hidden lg:block">
          <Nav isDropdown={false} />
        </div>
        <div className="flex-grow hidden lg:block">
          <SocialMedia />
        </div>
        <Sidebar />
      </div>

    </>
  );
};

export default Navbar;
