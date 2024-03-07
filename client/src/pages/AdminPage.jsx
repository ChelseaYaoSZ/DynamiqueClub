import React, { useState } from "react";
import BannerForm from "../components/Admin/BannerForm";
import NoteForm from "../components/Admin/NoteForm";

const tabTypes = ["banner", "note", "program"]; // Add more form types as needed

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("banner"); // "banner" or "user"

  // Function to handle tab change
  const handleTabChange = (tabType) => {
    setActiveTab(tabType);
  };

  return (
    <div className="flex flex-col items-center justify-center my-16">
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

      <div className="lg:w-[650px]">
        {activeTab === "banner" && <BannerForm />}
        {activeTab === "note" && <NoteForm />}
        {/* Handle additional form components as needed based on the active tab */}
      </div>
    </div>
  );
};

export default AdminPage;
