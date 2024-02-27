import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsVisible(!isVisible);
  const closeSidebar = () => setIsVisible(false);

  // Click Outside to Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        ref={sidebarRef}
        onClick={toggleSidebar}
        className="flex w-1/4 bg-customRed text-white justify-center items-center cursor-pointer lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
        {isVisible && (
          <div className="fixed right-0 top-0 z-50 flex flex-col w-3/7 bg-customRed p-3">
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
              onClick={closeSidebar}
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
