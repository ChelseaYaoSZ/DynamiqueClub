import React from "react";

const ClubName = () => {
    return (
        <div className="flex flex-row justify-start items-center">
        <div className="flex items-baseline gap-4">
          <div className="flex items-center">
            <div
              className="text-customRed font-bold"
              style={{ transform: "rotate(270deg)" }}
            >
              MTL
            </div>
            <div
              style={{ textShadow: "0px 3px 0px #C00021", marginLeft: "-4px" }}
              className="text-white font-semibold text-3xl"
            >
              Dynamique
            </div>
          </div>
          <div className=" text-customYellow font-ser text-xs">
            Volleyball Club
          </div>
        </div>
      </div>
    );
}

export default ClubName;