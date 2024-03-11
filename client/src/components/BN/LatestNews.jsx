import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const LatestNews = ({ date, eventTitle }) => {

  return (
    <div
      className="flex flex-col justify-start px-8 py-6 rounded gap-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="bg-customRed text-sm text-white px-2 rounded font-medium">
            THE LATEST NEWS
          </div>
          <div className="text-sm text-white">{moment(date).format("MMMM Do YYYY")}</div>
        </div>
        <div>
          <Link
            to="/schedule"
            className="text-white font-notable text-2xl lg:text-3xl hover:underline"
          >
            {eventTitle}
          </Link>
        </div>
        <div className="flex justify-end">
          <Link
            to="/registration"
            className="bg-customRed text-white font-medium rounded px-3 py-1 hover:font-bold hover:bg-red-800"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
