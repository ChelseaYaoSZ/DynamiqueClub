import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="font-semibold text-darkBlue text-xl text-center">
        LOCATION
      </div>
      <div className="text-white text-lg">
        <Link to="/contact" className="hover:text-customYellow">
          College Beaubois <br /> 4901 Rue du Collège – Beaubois, <br />
          Pierrefonds, QC H8Y 3T4
        </Link>
      </div>
    </div>
  );
};

export default Location;
