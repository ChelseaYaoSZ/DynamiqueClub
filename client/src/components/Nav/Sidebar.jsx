import React, { useState } from "react";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // State to manage sidebar visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible ? (
        <div className="fixed right-0 top-0 z-50 flex flex-col w-1/3 bg-customRed p-3">
          <div className="flex flex-col items-start p-3">
            <div className="flex items-center">
              <div
                className="text-darkBlue font-semibold"
                style={{ transform: "rotate(270deg)" }}
              >
                MTL
              </div>
              <div
                style={{
                  textShadow: "0px 3px 0px #003049",
                  marginLeft: "-4px",
                }}
                className="text-white font-semibold text-3xl"
              >
                Dynamique
              </div>
            </div>
            <div className="text-customYellow font-ser text-xs pl-5">
              Volleyball Club
            </div>
          </div>

          <Nav isDropdown={true} />

          <div className="flex justify-start">
            <SocialMedia />
          </div>
          
          <button
            className=" text-customYellow self-start text-xl ml-5 my-5"
            onClick={toggleSidebar}
          >
            CLOSE
          </button>
        </div>
      ) : (
        <div
          className="cursor-pointer w-1/4 bg-customRed text-white flex lg:hidden justify-center items-center"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
