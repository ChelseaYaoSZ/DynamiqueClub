import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import moment from "moment";

const LatestNews = ({ date, eventTitle, eventTitle_fr }) => {
  const { t, i18n } = useTranslation();

  // Get the current language
  const currentLang = i18n.language;

  // Determine which title to display based on the current language
  const displayTitle = currentLang === 'fr' ? eventTitle_fr : eventTitle;

  return (
    <div
      className="flex flex-col justify-start px-8 py-6 rounded gap-4 bg-darkBlue bg-opacity-25"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="bg-customRed text-sm text-white px-2 rounded font-medium">
            {t('home.banner.subtitle')}
          </div>
          <div className="text-sm text-white">{moment(date).format("MMMM Do YYYY")}</div>
        </div>
        <div>
          <Link
            to="/schedule"
            className="text-white font-notable text-2xl lg:text-3xl hover:underline"
          >
            {displayTitle}
          </Link>
        </div>
        <div className="flex justify-end">
          <Link
            to="/registration"
            className="bg-customRed text-white font-medium rounded px-3 py-1 hover:font-bold hover:bg-red-800"
          >
            {t('home.banner.register')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
