import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { id: 'facebook', icon: faFacebook, url: 'https://www.facebook.com/profile.php?id=61551709738046' },
  { id: 'instagram', icon: faInstagram, url: 'https://www.instagram.com/ssffsteven/' },
];

const SocialMedia = () => {
  return (
    <div className="bg-customRed flex justify-center p-3 text-2xl h-20 items-center">
      {socialMediaLinks.map((social) => (
        <a key={social.id} href={social.url} className="text-white p-2 hover:text-customYellow">
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
