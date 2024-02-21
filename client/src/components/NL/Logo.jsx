import React from "react";
import logoImage from '../../assets/logo-white.png';

const Logo = () => {
    return (
      <div className="flex lg:flex-col items-center ">
        <div className="mb-2">
        <img src={logoImage} alt="Logo" className="h-24" /> 
        </div>  
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="text-customRed font-bold" style={{ transform: 'rotate(270deg)' }}>MTL</div>            
            <div style={{ textShadow: "0px 3px 0px #003049", marginLeft: '-4px'}} className="text-white font-semibold text-3xl">Dynamique</div>
          </div>
          <div className="text-customYellow font-ser text-xs">
            Volleyball Club
          </div>
        </div>


      </div>

      
    );
  };

export default Logo;
