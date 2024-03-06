import React from "react";
import { NavLink } from "react-router-dom";

const programs = [
  { name: "U17 Competitive", path: "/program/u17" },
  { name: "U16 Competitive", path: "/program/u16" },
  { name: "U14 Competitive", path: "/program/u14" },
  { name: "U13 Competitive", path: "/program/u13" },
  { name: "DEV1", path: "/program/dev1" },
  { name: "DEV2", path: "/program/dev2" },
];

const Nav = ({ isDropdown = false }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Program", path: "/program", dropdown: true },
    { name: "Registration", path: "/registration" },
    { name: "Schedule", path: "/schedule" },
    { name: "About Us", path: "/club" },
    { name: "Contact", path: "/contact" },
  ];

  const containerClasses = isDropdown
    ? "flex-col items-start space-y-2"
    : "flex-row justify-between items-center pl-16 pr-10";

  const linkClasses = isDropdown ? "block px-4 py-2 text-left" : "mx-2 py-2";

  return (
    <nav className={`bg-customRed flex ${containerClasses} p-3 text-xl h-full`}>
      {navLinks.map((link) => (
        <div className="group" key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive
                  ? "text-customYellow font-medium text-2xl"
                  : "text-white hover:text-customYellow hover:font-medium"
              }`
            }
            style={({ isActive }) => ({
              textShadow: isActive ? "0px 1px 0px #ffffff" : "none",
            })}
          >
            {link.name}
          </NavLink>
          {link.dropdown && (
            <div className="absolute hidden group-hover:block bg-primary text-black mt-1">
              {programs.map((program) => (
                <NavLink
                  key={program.name}
                  to={program.path}
                  className="block px-6 py-1 text-left text-base font-medium hover:bg-gray-200 hover:text-customRed"
                >
                  {program.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
