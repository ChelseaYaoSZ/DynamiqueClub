import React from "react";
import { useTranslation } from "react-i18next";
import Notification from "../components/Notification";

const SchedulePage = () => {
  const { t } = useTranslation();
  const calendarSrc = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FToronto&bgcolor=%23ffffff&showTitle=0&showTz=0&src=dm9sbGV5ZHluYW1pcXVlQGdtYWlsLmNvbQ&color=%23039BE5";

  return (
    <div className="flex flex-col justify-center items-center py-8 lg:p-20 gap-4">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6">{t('common.schedule.title')}</h2>
      <Notification/>
      <iframe
        id="calendar"
        title="calendar"
        src={calendarSrc}
        className="w-3/4 h-[450px] lg:h-[600px] border-0" 
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default SchedulePage;
