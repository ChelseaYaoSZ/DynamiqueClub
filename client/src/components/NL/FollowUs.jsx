import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
  {
    id: "facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/profile.php?id=61551709738046",
  },
  {
    id: "instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/ssffsteven/",
  },
];

const FollowUs = () => {
  return (
    <div className="inline-flex flex-col items-start">
      <div className="font-semibold text-darkBlue text-xl text-center">
        FOLLOW US
      </div>
      <div className="flex justify-center items-center text-xl">
        {socialMediaLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            className="text-white p-2 hover:bg-red-700 rounded"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
