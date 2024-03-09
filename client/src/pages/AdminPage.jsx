import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerForm from "../components/Admin/BannerForm";
import NoteForm from "../components/Admin/NoteForm";
import ProgramForm from "../components/Admin/ProgramForm";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const tabTypes = ["banner", "note", "program"]; // Add more form types as needed

const allowedEmail = "jennifer.melanie.fan@gmail.com";
const allowedEmail2 = "szyao416@gmail.com";

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [activeTab, setActiveTab] = useState("banner"); // "banner" or "user"

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === allowedEmail || user.email === allowedEmail2) {
          setUser(user);
        } else {
          alert("Admin Dashboard access restricted to specific email account.");

          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  // Function to handle tab change
  const handleTabChange = (tabType) => {
    setActiveTab(tabType);
  };

  return token ? (
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <div className="flex flex-col items-center justify-center mt-16 mb-0 lg:mb-5">
        <div>
          <p className="text-3xl">FOR ADMIN USE ONLY</p>
        </div>
        <div className="flex justify-center pt-6 text-xl">
          {tabTypes.map((tabType) => (
            <div
              key={tabType}
              className={`px-5 py-2.5 cursor-pointer ${
                activeTab === tabType
                  ? "border-b-2 border-customRed text-customRed"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabChange(tabType)}
            >
              {tabType.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="w-96 lg:w-[650px]">
          {activeTab === "banner" && <BannerForm />}
          {activeTab === "note" && <NoteForm />}
          {activeTab === "program" && <ProgramForm />}
          {/* Handle additional form components as needed based on the active tab */}
        </div>
      </div>

      <div className="flex pt-6 mb-11">
        <button
          onClick={handleLogOut}
          className="bg-darkBlue text-white text-xl w-20 py-1 rounded hover:font-bold hover:bg-red-800"
        >
          Log Out
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center my-16 h-96 ">
      <div>
        <p className="text-3xl mb-10">FOR ADMIN USE ONLY</p>
      </div>
      <div className="flex flex-col justify-center items-center pt-6 text-xl gap-5">
        <p className="text-xl">Please login in with admin credentials.</p>
        <p className="text-xl">
          Contact Technical Support for more information.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
