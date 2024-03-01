import React from "react";
import missionImage from "../../assets/ourMission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const OurMission = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex justify-center">
        <img src={missionImage} alt="MissionImgae" className="h-52 w-88" />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-2">
        <div className="flex items-center text-customRed ">
          <FontAwesomeIcon
            icon={faVolleyballBall}
            className="text-base lg:text-lg mr-2"
          />
          <h2 className=" text-lg lg:text-xl font-semibold mr-2">Our Mission</h2>
          <hr className="flex-grow border-t border-customRed" />
        </div>
        <div className="font-inter font-black text-darkBlue  text-xl lg:text-2xl pl-5 max-w-96 lg:max-w-[1080px]">
          <p>
            The <span className="text-customYellow italic">dynamic</span> place
            to be for young Volleyballers:
          </p>
        </div>

        <div className=" pl-8 font-inter">
          <ul className="list-disc">
            <li>Foster Holistic Youth Development</li>
            <li>Instill Love for Volleyball</li>
            <li>Provide Safe and Inclusive Environment</li>
            <li>Equip for success in both volleyball and life</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
