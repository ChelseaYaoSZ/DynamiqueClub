import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="fixed top-0 w-full h-[35px]">
        <Navbar />
      </div>
      
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;