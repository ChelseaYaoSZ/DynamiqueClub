import React, { useState, useEffect } from "react";
import BannerForm from "../components/Admin/BannerForm";

const AdminPage = () => {
    const [activeForm, setActiveForm] = useState("box"); // "box" or "user"
    const [boxes, setBoxes] = useState([]); // State for boxes
    const [users, setUsers] = useState([]); // State for users
    const [selectedBox, setSelectedBox] = useState(null); // Selected box for edit
    const [selectedUser, setSelectedUser] = useState(null); // Selected user for edit
     // Function to handle box item selection
    const handleSelectBox = (box) => {
        setSelectedBox(box);
        setSelectedUser(null); // Reset selected user when a box is selected
    };

    // Function to handle user item selection
    const handleSelectUser = (user) => {
        setSelectedUser(user);
        setSelectedBox(null); // Reset selected box when a user is selected
      };


    // Function to handle tab change
    const handleTabChange = (formType) => {
        setActiveForm(formType);
        if (formType === "box") {
        setSelectedUser(null);
        } else if (formType === "user") {
        setSelectedBox(null);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center my-16 ">
            <div >
            <p className="text-3xl"> FOR ADMIN USE ONLY </p>
            </div>
            <div className="flex justify-center pt-6 text-xl">
                 <div
                    className={`px-5 py-2.5 cursor-pointer ${activeForm === 'box' ? 'border-b-2 border-customRed text-customRed' : 'text-gray-400'}`}
                    onClick={() => handleTabChange("box")}
                    >
                    Banner
                    </div>
                <div
                className={`px-5 py-2.5 cursor-pointer ${activeForm === 'user' ? 'border-b-2 border-customRed text-customRed' : 'text-gray-400'}`}
                onClick={() => handleTabChange("user")}
            >
                Note
            </div>
        </div>

      <div className="lg:w-[650px]">
        {activeForm === "box" ? (
          <BannerForm />
        ) : (
          <>
            
          </>
        )}
      </div>
    </div>
    );
    };

export default AdminPage;