import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-[84px]">
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
