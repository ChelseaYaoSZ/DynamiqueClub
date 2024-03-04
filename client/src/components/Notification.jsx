import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
  return (
    <div className="bg-bgWhite text-black py-3 px-6 text-lg w-3/4 border">
      <div className="flex gap-4">
        <div className="bg-customRed text-sm text-white px-2 py-0 rounded font-medium">
          NOTE IMPORTANT!
        </div>
        <div className="text-sm">February 2, 2024</div>
      </div>

      <div className="w-full text-start text-xl font-monomaniac text-customRed pt-4 scroll-text">
        <span className="scroll-animation-lg">
          {" "}
          <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
          U17 Practice in March 6th has changed to March 7th!
        </span>
      </div>
      <div className="flex justify-end">
          <Link
            to="/registration"
            className="bg-customRed text-white text-base font-medium rounded px-2 py-1 hover:font-bold hover:bg-customBlue"
          >
            Register now
          </Link>
        </div>
    </div>
  );
};

export default Notification;
