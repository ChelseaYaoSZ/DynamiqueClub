import React, { useState } from "react";

const CoachCard = ({ id, name, title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const coachImage = (
    <img
      src={image}
      alt={`Coach ${name}`}
      className="transition duration-300 ease-in-out"
    />
  );

  const extraDetails = (
    <div
    className="relative px-4 py-2 overflow-hidden h-[290px] lg:h-[354px] flex flex-col justify-center"
  >
    <div className="absolute inset-0 bg-no-repeat bg-contain z-0" style={{
      backgroundImage: `url(${image})`,
      opacity: 0.4,
    }}></div>
    <p className="text-white font-medium text-base lg:text-xl z-10 relative">
      {description}
    </p>

  </div>
  
  );

  return (
    <div
      key={id}
      className="rounded overflow-hidden shadow-lg text-center flex flex-col px-5 py-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? coachImage : extraDetails}

      <div className="flex flex-col py-3 bg-customBlue">
        <div className="font-extrabold text-2xl lg:text-3xl text-white">
          {name}
        </div>
        <p className="text-darkBlue text-xl lg:text-2xl font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CoachCard;
