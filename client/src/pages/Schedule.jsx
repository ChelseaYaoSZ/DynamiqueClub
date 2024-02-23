import React from 'react';
import Notification from '../components/Notification';

const Schedule = () => {
  
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=volleydynamique%40gmail.com&ctz=America%2FToronto";

  return (
    <div className="flex flex-col justify-center items-center p-20 gap-4">
      <h2 className="text-4xl font-semibold text-center mb-6">PRACTICE & GAME SCHEDULE</h2>
      <Notification className=""/>
      <iframe
        src={calendarSrc}
        className="w-3/4 h-[600px] border-0" 
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Schedule;
