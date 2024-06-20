import React from 'react';
import { useState } from 'react';
import i18n from '../../i18n'; // adjust the path according to your project structure
import moment from "moment";
import 'moment/locale/fr'; 

const LanguageSwitcher = () => {
  const toggleLanguage = () => {
    // Switch between 'en' and 'fr'
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    moment.locale(newLang); // Set moment's locale to match i18next language
    setLang(newLang);
  };

  const [lang, setLang] = useState(i18n.language);

  return (
    <div className="bg-customRed flex justify-center p-3 text-xl h-full items-center">
      <button
        onClick={toggleLanguage}
        className="w-8 h-8 rounded-full bg-white text-customRed flex items-center justify-center shadow hover:bg-customYellow hover:font-medium"
        aria-label="Toggle Language"
      >
        {lang.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
