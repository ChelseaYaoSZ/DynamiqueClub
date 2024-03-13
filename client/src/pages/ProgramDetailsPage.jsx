import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { PiScreencastLight } from "react-icons/pi";
import { SiWebmoney } from "react-icons/si";
import { CgGirl } from "react-icons/cg";
import { TbLocationCheck } from "react-icons/tb";
import contact from "../assets/contact.png";
import data from "../data/program.json";
import useFetchPrograms from "../hooks/useFetchPrograms";

const ProgramDetailsPage = () => {
  const { programId } = useParams();
  let currP = data.programs.find((p) => p.id === programId);

  const { programs, loading, error } = useFetchPrograms();
  let DBdata = programs.find((p) => p.id.toLowerCase() === programId);
  //console.log(DBdata);

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p></p>;
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
            <h3 className="text-2xl text-customRed text-center font-semibold mt-0 sm:mt-5 sm:text-3xl">
              {currP.title}
            </h3>
            <p className="text-lg text-darkBlue text-center font-semibold mt-6 mb-5 sm:text-xl">
              {currP.grade}
            </p>
            <Link
              to={`/registration?programId=${currP.id}`}
              className="bg-customRed text-white font-medium rounded px-3 py-1 mb-10 hover:font-bold hover:bg-red-800"
            >
              Register now
            </Link>
          </div>

          <div className="flex flex-col items-start lg:ml-5">
            <h4 className="text-lg text-darkBlue text-center font-semibold mt-0 sm:mt-5 sm:text-xl">
              Age: {currP.age}
            </h4>
            <p className="text-base md:text-xl mt-5">{currP.desc}</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-between">
          <h3 className="text-2xl text-customRed font-semibold mt-10 mb-6 sm:text-3xl">
            Information
          </h3>

          <div className="flex w-full mb-2">
            <div className="flex flex-row items-center">
              <FiClock />
              <p className="mx-2 text-darkBlue font-medium">Schedule :</p>
            </div>
            <p>{DBdata.schedule}</p>
          </div>

          <div className="flex w-full mb-2">
            <div className="flex flex-row items-center">
              <PiScreencastLight />
              <p className="mx-2  text-darkBlue font-medium">
                Current Session :
              </p>
            </div>
            <p>{DBdata.current_session}</p>
          </div>

          <div className="flex flex-col w-full mb-2">
            <div className="flex flex-row items-center">
              <SiWebmoney />
              <p className="mx-2  text-darkBlue font-medium">Cost :</p>
              <p>{DBdata.cost}</p>
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
              <p className="mx-2  text-darkBlue font-medium">Admission :</p>
            </div>
            <p>{currP.admision}</p>
          </div>

          <div className="flex flex-col md:flex-row w-full mb-2">
            <div className="flex flex-row items-center">
              <TbLocationCheck />
              <p className="mx-2  text-darkBlue font-medium">Address :</p>
            </div>
            <p>{currP.address}</p>
          </div>
        </div>

        <div className="my-8">
          <Link
            to={`https://drive.google.com/file/d/1jZe8RfRJZGtUQi8ocLbqG_jwRnP4KOr-/view?usp=sharing`}
            className="bg-customRed text-white font-medium rounded px-3 py-1 mb-10 hover:font-bold hover:bg-red-800"
          >
            Check Club Full Schedule
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsPage;
