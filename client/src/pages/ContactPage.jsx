import React from "react";
import contact from "../assets/contact.png";

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

        <div className="w-4/5 xl:w-full flex flex-col lg:flex-row mx-auto justify-between lg:gap-5 xl:gap-10  my-10">
          <form
            className="w-full flex flex-col max-w-lg text-lg mx-auto"
            action="https://formsubmit.co/volleyballdynamique@gmail.com"
            method="POST"
          >
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="w-full mb-3 rounded-sm"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone(Optional)"
                className="w-full mb-3 rounded-sm"
              />
            </div>
            <input
              type="email"
              name="email"
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
            <input
              type="hidden"
              name="_next"
              value="https://test.volleyballdynamique.ca/thankyou"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_subject"
              value="New Message from Contact Us Page"
            ></input>
            <button
              className="w-full h-[45px] bg-customRed rounded-lg text-white font-semibold text-2xl my-5"
              type="submit"
            >
              Submit
            </button>
          </form>

          <div className="w-full flex flex-col max-w-lg mt-5 md:mt-5 lg:mt-0 mx-auto">
            <iframe
              id="gmap_canvas"
              title="gmap_canvas"
              width="auto"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=4901%20Rue%20du%20Coll%C3%A8ge%20Pierrefonds+(College%20Beaubois)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
