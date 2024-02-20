import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isDropdown = false }) => {
  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Program', path: '/program' },
    { name: 'Registration', path: '/registration' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const containerClasses = isDropdown
    ? "flex-col items-start space-y-2" 
    : "flex-row justify-between items-center pl-20 pr-10"; 

  const linkClasses = isDropdown
    ? "block px-4 py-2 text-left" 
    : "mx-2 py-2"; 

  return (
    <nav className={`bg-customRed text-white flex ${containerClasses} p-3 text-lg`}>
      {navLinks.map((link) => (
        <Link key={link.name} to={link.path} className={`${linkClasses} hover:bg-red-300 rounded`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
