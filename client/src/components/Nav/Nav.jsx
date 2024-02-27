import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isDropdown = false }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Program", path: "/program" },
    { name: "Registration", path: "/registration" },
    { name: "Schedule", path: "/schedule" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const containerClasses = isDropdown
    ? "flex-col items-start space-y-2"
    : "flex-row justify-between items-center pl-16 pr-10";

  const linkClasses = isDropdown ? "block px-4 py-2 text-left" : "mx-2 py-2";

  return (
    <nav className={`bg-customRed flex ${containerClasses} p-3 text-lg`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "text-customYellow font-medium text-xl"
                : "text-white hover:text-customYellow hover:font-medium"
            }`
          }
          style={({ isActive }) => ({
            textShadow: isActive ? "0px 1px 0px #ffffff" : "none",
          })}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
