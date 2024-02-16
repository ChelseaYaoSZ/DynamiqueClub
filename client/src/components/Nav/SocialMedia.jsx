import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { id: 'facebook', icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61551709738046' },
  { id: 'instagram', icon: faInstagram, url: 'https://www.instagram.com/ssffsteven/' },
];

const SocialMedia = () => {
  return (
    <div className="bg-customRed flex justify-center items-center p-3 text-lg">
      {socialMediaLinks.map((social) => (
        <a key={social.id} href={social.url} className="text-white p-2 hover:bg-red-700 rounded">
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
