import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const Waiver = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon icon={faVolleyballBall} className="text-customRed" />
        <h2 className="text-xl lg:text-2xl font-medium">
        {t('registration.subtitle.assumption')}
        </h2>
      </div>
      <div className="text-sm lg:text-base h-60 text-justify overflow-y-scroll border border-gray p-4 bg-white">
        <p>
          {t('registration.waiver.text_1')}
        </p>
        <br />
        <p>
          {t('registration.waiver.text_2')}
        </p>
        <br />
        <p>
          {t('registration.waiver.text_3')}
        </p>
        <br />
        <p>
        {t('registration.waiver.text_4')}&nbsp;
          <span className="underline font-medium">
            {t('registration.waiver.text_5')}
          </span>
        </p>

        <br />
        <p>
          {t('registration.waiver.text_6')}
        </p>
        <br />
        <p>
          {t('registration.waiver.text_7')}
        </p>
      </div>
      <div className="flex pt-4">
        <input type="checkbox" name="waiver" required className="mr-2" />
        <label className="flex items-center font-medium text-sm lg:text-base">
          {t('registration.waiver.check')}
        </label>
      </div>
    </>
  );
};

export default Waiver;
