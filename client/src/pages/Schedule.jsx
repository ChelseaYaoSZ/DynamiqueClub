import React from "react";
import Notification from "../components/Notification";

const Schedule = () => {

  const calendarSrc = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&bgcolor=%23ffffff&showPrint=0&showTitle=0&showTz=0&showCalendars=0&showTabs=0&src=dm9sbGV5ZHluYW1pcXVlQGdtYWlsLmNvbQ&color=%23039BE5";

  return (
    <div className="flex flex-col justify-center items-center py-8 lg:p-20 gap-4">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:mb-6">PRACTICE & GAME SCHEDULE</h2>
      <Notification/>
      <iframe
        src={calendarSrc}
        className="w-3/4 h-[450px] lg:h-[600px] border-0" 
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Schedule;
