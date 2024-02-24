import React from "react";
import contact from "../assets/contact.png";
import map from "../assets/map.png";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const ContactPage = () => {
  return (
    // <div className="w-screen mx-auto sm:w-4/5">
    <div className="w-full flex flex-col items-center">
      <div>
        <img
          src={contact}
          alt="contactImgae"
          className="w-full mb-10 sm:mb-0"
        />
      </div>

      <div className="w-full max-w-screen-lg flex flex-col  items-center  sm:my-10 ">
        <title className="w-full flex flex-col items-center  gap-x-5">
          <h3 className="text-3xl text-customRed text-center font-semibold sm:text-4xl">
            Contact Us
          </h3>
          <div className="flex flex-col sm:flex-row justify-around items-center text-base gap-5 mt-10 sm:my-10">
            <div className="flex items-center justify-center text-base sm:text-xl">
              <FiPhone />
              <p className="ml-5">514-402-3979</p>
            </div>
            <div className="flex items-center justify-center text-base sm:text-xl sm:ml-10">
              <span>
                <FiMail />
              </span>
              <p className="ml-5">volleyballdynamique@gmail.com</p>
            </div>
          </div>
        </title>

        <div className="w-4/5 sm:w-full flex flex-col sm:flex-row justify-center sm:gap-10  my-10">
          <form className="w-full flex flex-col max-w-lg text-lg">
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-3 rounded-sm"
              />
              <input
                type="text"
                placeholder="Phone(Optional)"
                className="w-full mb-3 rounded-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              className="mb-3 rounded-sm"
            />
            <textarea
              name="messages"
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
              className="mb-2 rounded-sm"
            ></textarea>
            <button className="w-full h-[45px] bg-customRed rounded-lg text-white font-semibold text-2xl my-5">
              Submit
            </button>
          </form>

          <div className="w-full flex flex-col max-w-md mt-5 md:mt-0">
            <img
              src={map}
              alt="map"
              className="w-[356px] h-[340px] rounded-md sm:w-[536px] sm:h-[352px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
