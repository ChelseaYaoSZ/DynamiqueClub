import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { PiScreencastLight } from "react-icons/pi";
import { SiWebmoney } from "react-icons/si";
import { CgGirl } from "react-icons/cg";
import { TbLocationCheck } from "react-icons/tb";
import contact from "../assets/contact.png";
import programData from "../data/programData";
import useFetchPrograms from "../hooks/useFetchPrograms";
import { useTranslation } from "react-i18next";

const ProgramDetailsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { programId } = useParams();
  let program = programData.find((p) => p.id === programId);
  const currP = program ? {
    ...program,
    title: t(program.title),
    age: t(program.age),
    grade: t(program.grade),
    desc: t(program.desc),
    admision: t(program.admision),
    address: t(program.address),
    otherCost: t(program.otherCost)
  } : null;

  const { programs, loading, error } = useFetchPrograms();
  let DBdata = programs.find((p) => p.id.toLowerCase() === programId);
  console.log(programs, DBdata)
  // State initialization with safe fallbacks
  const [schedule, setSchedule] = useState(DBdata ? DBdata.schedule : "");
  const [schedule_fr, setSchedule_fr] = useState(DBdata ? DBdata.schedule_fr : "");
  const [current_session, setCurrentSession] = useState(DBdata ? DBdata.current_session : "");
  const [current_session_fr, setCurrentSession_fr] = useState(DBdata ? DBdata.current_session_fr : "");
  const [cost, setCost] = useState(DBdata ? DBdata.cost : "");
  const [cost_fr, setCost_fr] = useState(DBdata ? DBdata.cost_fr : "");

  useEffect(() => {
    if (DBdata) {
      setSchedule(DBdata.schedule);
      setSchedule_fr(DBdata.schedule_fr);
      setCurrentSession(DBdata.current_session);
      setCurrentSession_fr(DBdata.current_session_fr);
      setCost(DBdata.cost);
      setCost_fr(DBdata.cost_fr);
    }
  }, [DBdata]); // Update state when DBdata changes

  const displaySchedule = currentLang === "fr" ? schedule_fr : schedule;
  const displayCurrentSession = currentLang === "fr" ? current_session_fr : current_session;
  const displayCost = currentLang === "fr" ? cost_fr : cost;

  if (loading) return <p>Loading programs...</p>;
  if (error) return <p>Error loading data.</p>;
  if (!DBdata) return <p>No data available.</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <img
          src={contact}
          alt="contactImgae"
          className="w-full mb-10 sm:mb-0"
        />
      </div>

      <div className="w-10/12 flex flex-col justify-center items-center max-w-screen-lg mx-auto my-10">
        <div className="flex flex-col lg:flex-row lg:justify-between pb-10 border-b-2 border-customRed">
          <div className="w-full flex flex-col items-start">
            <h3 className="text-2xl text-customRed font-semibold mt-0 sm:mt-5 sm:text-3xl">
              {currP.title}
            </h3>
            <p className="text-lg text-darkBlue font-semibold mt-6 mb-5 sm:text-xl">
              {currP.grade}
            </p>
            {DBdata.registerDisplay ? (
              <Link
                to={`/registration?programId=${currP.id}`}
                className="bg-customRed text-white font-medium rounded px-3 py-1 mb-10 hover:font-bold hover:bg-red-800"
              >
                {t("program.page.subtitle.register_button")}
              </Link>
            ) : (
              <Link
                to={``}
                className="bg-gray-500 text-white font-medium rounded px-3 py-1 mb-10 hover:font-bold hover:bg-gray-400"
              >
                {t("program.page.subtitle.close_button")}
              </Link>
            )}
          </div>

          <div className="flex flex-col items-start lg:ml-5">
            <h4 className="text-lg text-darkBlue text-center font-semibold mt-0 sm:mt-5 sm:text-xl">
              {t("program.page.subtitle.age")}{currP.age}
            </h4>
            <p className="text-base md:text-xl mt-5">{currP.desc}</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-between">
          <h3 className="text-2xl text-customRed font-semibold mt-10 mb-6 sm:text-3xl">
            {t("program.page.subtitle.information")}
          </h3>

          <div className="flex w-full mb-2">
            <div className="flex flex-row items-center">
              <FiClock />
              <p className="mx-2 text-darkBlue font-medium">{t("program.page.subtitle.schedule")}</p>
            </div>
            <p>{displaySchedule}</p>
          </div>

          <div className="flex w-full mb-2">
            <div className="flex flex-row items-center">
              <PiScreencastLight />
              <p className="mx-2  text-darkBlue font-medium">
                {t("program.page.subtitle.current_session")}
              </p>
            </div>
            <p>{displayCurrentSession}</p>
          </div>

          <div className="flex flex-col w-full mb-2">
            <div className="flex flex-row items-center">
              <SiWebmoney />
              <p className="mx-2  text-darkBlue font-medium">{t("program.page.subtitle.cost")}</p>
              <p>{displayCost}</p>
            </div>
            {DBdata.id !== "DEV1" && DBdata.id !== "DEV2" && (
              <p className="mx-5">
                <span className="text-customRed">*</span> {currP.otherCost}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row w-full mb-2">
            <div className="flex flex-row items-center">
              <CgGirl />
              <p className="mx-2  text-darkBlue font-medium">{t("program.page.subtitle.admission")}</p>
            </div>
            <p>{currP.admision}</p>
          </div>

          <div className="flex flex-col md:flex-row w-full mb-2">
            <div className="flex flex-row items-center">
              <TbLocationCheck />
              <p className="mx-2  text-darkBlue font-medium">{t("program.page.subtitle.address")}</p>
            </div>
            <p>{currP.address}</p>
          </div>
        </div>

        <div className="my-8">
          <Link
            to={`https://drive.google.com/file/d/1jZe8RfRJZGtUQi8ocLbqG_jwRnP4KOr-/view?usp=sharing`}
            className="bg-customRed text-white font-medium rounded px-3 py-1 mb-10 hover:font-bold hover:bg-red-800"
          >
            {t("program.page.subtitle.check_button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsPage;
