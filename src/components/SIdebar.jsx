import { TbActivityHeartbeat } from "react-icons/tb";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { MdReduceCapacity } from "react-icons/md";
import { TbCalendarEventFilled } from "react-icons/tb";
import { FaRegGrinBeam } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { LuBuilding } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsPatchExclamation } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { BiFlag } from "react-icons/bi";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  return (
    <>
      <div className="shadow w-3xs flex flex-col bg-white h-full overflow-y-auto">
        <div className="h-16 flex flex-col items-center justify-center md:hidden">
          <div className="logo flex items-center gap-2">
            <TbActivityHeartbeat size={40} color="#2E8075" />
            <p className="font-medium text-2xl text-gray-800">
              We
              <span className="font-extralight text-2xl text-gray-500">
                Care
              </span>
            </p>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            Medical Admin Dashboard
          </p>
        </div>
        <div className=" mt-5">
          <div className="flex flex-col ">
            <p className="pl-5 text-sm font-medium text-gray-500">Main Menu</p>
            <div className="flex pl-5 mt-4 cursor-pointer bg-green-100/60 text-[#2E8075]  py-2 border-r-4 border-[#2E8075] transition-all duration-800 transition-color ease-in-out">
              <PiSquaresFourDuotone size={24} className="" />
              <span className="ml-3 font-semibold">Dashboard</span>
            </div>

            <SidebarSection Icon={MdReduceCapacity} text="Pacient" />
            <SidebarSection Icon={TbCalendarEventFilled} text="Appointment" />
          </div>
          <div className="flex flex-col mt-10">
            <p className="pl-5 text-sm font-medium text-gray-500">Other Menu</p>

            <SidebarSection Icon={FaRegGrinBeam} text="Doctors" />
            <SidebarSection Icon={RxAvatar} text="Employees" />
            <SidebarSection Icon={LuBuilding} text="Department" />
            <SidebarSection Icon={CiBadgeDollar} text="Payment" />
            <SidebarSection
              Icon={MdProductionQuantityLimits}
              text="Product & stock"
            />
          </div>
          <div className="flex flex-col mt-10">
            <p className="pl-5 text-sm font-medium text-gray-500">
              Help & Settings
            </p>

            <SidebarSection Icon={BsPatchExclamation} text="Help & Center" />
            <SidebarSection Icon={CiSettings} text="Settings" />
            <SidebarSection Icon={BiFlag} text="Report" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;