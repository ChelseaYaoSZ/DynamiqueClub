import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-customRed text-white text-center p-4">
      © MTL Dynamique 2024 |{" "}
      <a href="/privacy-policy" className="">
        Privacy Policy
      </a>{" "}
      |{" "}
      <a href="/terms-of-use" className="">
        Terms of Use |{" "}
      </a>
      <Link to="/admin" className="">Admin</Link>
    </footer>
  );
};

export default Footer;
