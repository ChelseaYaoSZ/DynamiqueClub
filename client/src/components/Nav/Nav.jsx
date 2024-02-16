import React from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Program', path: '/program' },
    { name: 'Registration', path: '/registration' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-customRed text-white flex justify-between items-center p-3 pl-20 text-lg">

      {navLinks.map((link) => (
        <Link key={link.name} to={link.path} className="mr-4 hover:bg-red-300 p-2 rounded">
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
