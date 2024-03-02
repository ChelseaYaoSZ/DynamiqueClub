import React from "react";
import missionImage from "../../assets/ourMission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const OurMission = () => {
  return (
    <div className="">
      {/* For mobile mode or default mode */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex items-center text-customRed gap-2">
          <FontAwesomeIcon icon={faVolleyballBall} className="text-base" />
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <hr className="flex-grow border-t border-customRed border-[1px]" />
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <img src={missionImage} alt="MissionImage" className="h-52 w-auto" />

          <div className="flex flex-col font-inter max-w-96 gap-2">
            <div className="font-black text-darkBlue text-xl pl-5">
              <p>
                The <span className="text-customYellow italic">dynamic</span>{" "}
                place to be for young Volleyballers:
              </p>
            </div>

            <div className="text-sm pl-8">
              <ul className="list-disc">
                <li>Foster Holistic Youth Development</li>
                <li>Instill Love for Volleyball</li>
                <li>Provide Safe and Inclusive Environment</li>
                <li>Equip for success in both volleyball and life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For large screen mode */}
      <div className="hidden lg:flex lg:w-full">
        <div className="lg:w-1/2 flex justify-center">
          <img src={missionImage} alt="MissionImage" className="h-52 w-88" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-2">
          <div className="flex items-center text-customRed ">
            <FontAwesomeIcon
              icon={faVolleyballBall}
              className="text-base lg:text-lg mr-2"
            />
            <h2 className=" text-lg lg:text-xl font-semibold mr-2">
              Our Mission
            </h2>
            <hr className="flex-grow border-t border-customRed border-[1px]" />
          </div>
          <div className="font-inter max-w-[1080px]">
            <div className="font-black text-darkBlue  text-xl lg:text-2xl pl-5">
              <p>
                The <span className="text-customYellow italic">dynamic</span>{" "}
                place to be for young Volleyballers:
              </p>
            </div>

            <div className=" pl-8 pt-2">
              <ul className="list-disc">
                <li>Foster Holistic Youth Development</li>
                <li>Instill Love for Volleyball</li>
                <li>Provide Safe and Inclusive Environment</li>
                <li>Equip for success in both volleyball and life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
