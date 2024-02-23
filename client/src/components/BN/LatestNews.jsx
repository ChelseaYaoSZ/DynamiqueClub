import React from "react";
import { Link } from "react-router-dom";

const LatestNews = ({ id }) => {
  const newsEvents = [
    {
      id: 1,
      date: "February 22, 2024",
      event: "2024 Winter season & U16 tryout registration is open!",
    },
    {
      id: 2,
      date: "March 15, 2024",
      event: "Spring Volleyball Camp registrations begin.",
    },
    {
      id: 3,
      date: "April 5, 2024",
      event: "Join our Summer Volleyball league!",
    },
  ];

  const { date, event } = newsEvents.find((news) => news.id === id);

  return (
    <div
      className="flex flex-col justify-start p-8 rounded gap-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div key={id} className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="bg-customRed text-sm text-white px-2 py-0 rounded font-medium">
            THE LATEST NEWS
          </div>
          <div className="text-sm text-white">{date}</div>
        </div>
        <div className="text-white font-notable text-3xl">{event}</div>
        <div className="flex justify-end">
          <Link
            to="/registration"
            className="bg-customRed text-white font-medium rounded px-3 py-1 hover:bg-red-700 transition-colors"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
