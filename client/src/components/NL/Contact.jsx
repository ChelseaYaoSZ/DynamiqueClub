import React from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start">
      <div className="font-semibold text-darkBlue text-xl text-center">
        {t('common.newsletter.contact')}
      </div>
      <div className="text-white text-lg">
        514-402-3979 <br /> volleydynamique@gmail.com
      </div>
    </div>
  );
};

export default Contact;