import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";

const fields = [
  { name: "parentFirstName", label: "first_name", required: true, type: "text" },
  { name: "parentLastName", label: "last_name", required: true, type: "text" },
  { name: "parentEmail", label: "email", required: true, type: "email" },
  { name: "parentPhone", label: "phone", required: true, type: "tel"},
];

const ParentInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-center gap-2">
        <FontAwesomeIcon
          icon={faVolleyballBall}
          className="text-customRed"
        />
        <h2 className="text-xl lg:text-2xl font-medium">{t('registration.subtitle.parent_info')}</h2>
      </div>
      <div className="grid grid-cols lg:grid-cols-2 gap-2 lg:gap-5">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="block text-base lg:text-lg text-gray-700">
              {t(`registration.info.${field.label}`)}
              {field.required && (
                <span className="text-gray-400">  {t('registration.option.required')}</span>
              )}
            </label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              className="border p-2 rounded h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentInfo;
