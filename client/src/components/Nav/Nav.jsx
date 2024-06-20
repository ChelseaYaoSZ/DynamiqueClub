import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const programs = [
  { name: "u17", path: "/program/u17" },
  { name: "u16", path: "/program/u16" },
  { name: "u15", path: "/program/u15" },
  { name: "u14", path: "/program/u14" },
  { name: "u13", path: "/program/u13" },
  { name: "dev", path: "/program/dev" },
];

const Nav = ({ isDropdown = false }) => {
  const { t } = useTranslation();
  
  const links = [
    { name: "home", path: "/" },
    { name: "program", path: "/program", dropdown: true },
    { name: "registration", path: "/registration" },
    { name: "schedule", path: "/schedule" },
    { name: "about_us", path: "/club" },
    { name: "contact", path: "/contact" },
  ];

  const containerClasses = isDropdown
    ? "flex-col items-start space-y-2"
    : "flex-row justify-between items-center pl-16 pr-10";

  const linkClasses = isDropdown ? "block px-4 py-2 text-left" : "mx-2 py-2";

  return (
    <nav className={`bg-customRed flex ${containerClasses} p-3 text-xl h-full`}>
      {links.map((link) => (
        <div className="group" key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive
                  ? "text-customYellow font-medium text-2xl"
                  : "text-white  hover:text-customYellow hover:font-medium"
              }`
            }
            style={({ isActive }) => ({
              textShadow: isActive ? "0px 1px 0px #ffffff" : "none",
            })}
          >
            {t(`common.nav.${link.name}`)}
          </NavLink>
          {link.dropdown && (
            <div className="lg:absolute hidden group-hover:block bg-customRed text-black lg:text-white mt-2">
              {programs.map((program) => (
                <NavLink
                  key={program.name}
                  to={program.path}
                  className="block pl-6 lg:pl-2 pr-4 py-2 lg:py-3 text-left text-base lg:text-xl hover:font-medium hover:bg-gray-200 lg:hover:bg-customRed hover:text-customRed  lg:hover:text-customYellow"
                >
                  {t(`common.program.${program.name}`)}
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
