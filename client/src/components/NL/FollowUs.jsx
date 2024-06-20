import React from "react";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start">
      <div className="font-semibold text-darkBlue text-xl text-center">
        {t('common.newsletter.follow_us')}
      </div>
      <div className="flex justify-center items-center text-xl">
        {socialMediaLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            className="text-white p-2 hover:text-customYellow"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
