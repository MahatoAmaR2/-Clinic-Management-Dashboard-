import React from "react";
import { NavLink } from "react-router-dom";

const SidebarSection = ({ Icon, text, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center pl-5 py-2 mt-2 cursor-pointer transition-all duration-300
         ${
           isActive
             ? "bg-red-100/60 text-[#ff3232] border-r-4 border-[#f53636]"
             : "text-gray-600 hover:bg-gray-100"
         }`
        }
      >
        <Icon size={24} className="" />
        <span className="ml-3 font-semibold">{text}</span>
      </NavLink>
    </>
  );
};

export default SidebarSection;
