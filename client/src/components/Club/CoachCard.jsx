import React from 'react';

const CoachCard = ({ id, name, title, section, email, image }) => {
  return (
    <div key={id} className="rounded overflow-hidden shadow-lg text-center flex flex-col px-5">
      <img className="" src={image} alt={`Coach ${name}`} />
      <div className="flex flex-col py-3 bg-customBlue">
        <div className="font-extrabold text-2xl lg:text-3xl text-white ">{name}</div>
        <p className="text-darkBlue text-lg lg:text-xl font-semibold">{title}</p>
        <p className="text-darkBlue text-lg lg:text-xl font-semibold">{section}</p>
        <p className="text-customYellow text-sm lg:text-base font-normal">{email}</p>
      </div>
    </div>
  );
};

export default CoachCard;
