import React from "react";

const SidebarSection = ({ Icon, text }) => {
  return (
    <>
      <div className="flex pl-5 mt-2 cursor-pointer hover:bg-green-100/60 hover:text-[#2E8075] text-gray-500 py-2 border-r-4 border-transparent hover:border-[#2E8075] transition-all duration-800 transition-color ease-in-out">
        <Icon size={24} className="" />
        <span className="ml-3 font-semibold">{text}</span>
      </div>
    </>
  );
};

export default SidebarSection;