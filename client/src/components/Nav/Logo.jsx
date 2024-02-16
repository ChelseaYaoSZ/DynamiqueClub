// Import React and your logo image
import React from 'react';
import logoImage from '../../assets/logo-transparent.png'; 

const Logo = () => {
  return (
    <div className="flex items-center p-3 ">
      
      <img src={logoImage} alt="Logo" className="h-10 mr-2" /> 
      

      <span className="text-customRed font-bold" style={{ transform: 'rotate(270deg)' }}>MTL</span>
      

      <span style={{ textShadow: "0px 3px 0px #C00021" }} className="text-black font-semibold text-3xl">Dynamique</span>

    </div>
  );
};

export default Logo;
