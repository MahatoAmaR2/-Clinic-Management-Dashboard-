import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import profileImg from "../assets/profile.jpeg";
import { TbActivityHeartbeat } from "react-icons/tb";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="">
      <div
        className={`fixed md:hidden top-16 left-0 h-full z-20 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar />
      </div>


      <div className="navbar flex justify-between items-center pr-4 py-2 w-full bg-white h-16 shadow relative z-30">
        
        
        <div className="flex items-center gap-3 ml-5">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FaTimes size={20} className="text-gray-700" />
            ) : (
              <FaBars size={20} className="text-gray-700" />
            )}
          </button>
<div className="h-16 hidden flex-col items-center justify-center md:flex">
                  <div className="logo flex items-center gap-2">
                    <TbActivityHeartbeat size={40} color="red" />
                    <p className="font-medium text-2xl text-gray-800">
                      Me
                      <span className="font-extralight text-2xl text-gray-500">
                        Care
                      </span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                  Clinic Management Dashboard 

                  </p>
                </div>
          <div className="relative pl-2 md:ml-12">
            <input
              type="text"
              placeholder="Search anything here"
              className="w-full md:w-80 px-10 py-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500/50"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch size={18} />
            </div>
          </div>
        </div>

        <div className="right flex items-center gap-4">
          <IoIosNotificationsOutline size={25} color="black" className=" transform transition-transform duration-200 hover:scale-110 cursor-pointer"/>
          <span className="border-l-2 border-gray-300 h-6"></span>
          <img
            className="profile-pic rounded-full w-10 h-10  transform transition-transform duration-200 hover:scale-110 cursor-pointer"
            src={profileImg}
            alt="Profile"
          />
          <p className="text-black text-sm font-semibold">Musk</p>
          <FaCaretDown size={18} color="gray" className=" transform transition-transform duration-200 hover:scale-80 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;