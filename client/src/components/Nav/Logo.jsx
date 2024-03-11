// Import React and your logo image
import React from 'react';
import logoImage from '../../assets/logo-transparent.png'; 

const Logo = () => {
  return (
    <div className="flex h-full lg:justify-center items-center pt-2  pl-2 sm:pl-12 lg:pl-0 bg-primary">
      
      <img src={logoImage} alt="Logo" className="h-14 mr-1 ml-2" /> 
      
      <span className="text-customRed font-bold" style={{ transform: 'rotate(270deg)' }}>MTL</span>
      
      <span style={{ textShadow: "1.5px 0px 0px #C00021", marginLeft: '-6px' }} className="text-black font-semibold text-3xl">Dynamique</span>

    </div>
  );
};

export default Logo;
