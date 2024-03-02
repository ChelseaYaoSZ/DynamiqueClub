import React from "react";
import contact from "../assets/contact.png";

const ThankyouPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <img
          src={contact}
          alt="contactImgae"
          className="w-full mb-10 sm:mb-0"
        />
      </div>

      <div className="w-full max-w-screen-lg flex flex-col  items-center  sm:my-10 ">
        <h2>
          Thank you for messaging us. We will get back to you as soon as we can.
        </h2>
      </div>
    </div>
  );
};

export default ThankyouPage;
