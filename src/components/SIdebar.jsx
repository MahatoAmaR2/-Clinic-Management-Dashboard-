import { TbActivityHeartbeat } from "react-icons/tb";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { MdReduceCapacity } from "react-icons/md";
import { TbCalendarEventFilled } from "react-icons/tb";
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
        <div className=" mt-5">
          <div className="flex flex-col ">
            <p className="pl-5 text-sm font-medium text-gray-500">Main Menu</p>
            <SidebarSection
              Icon={PiSquaresFourDuotone}
              text="Dashboard"
              to="/"
            />
            <SidebarSection
              Icon={TbCalendarEventFilled}
              text="Appointments"
              to="/appointments"
            />
            <SidebarSection
              Icon={MdReduceCapacity}
              text="Patients"
              to="/patients"
            />
            <SidebarSection
              Icon={TbCalendarEventFilled}
              text="doctors"
              to="/doctors"
            />
          </div>
          <div className="flex flex-col mt-6">
            <p className="pl-5 text-sm font-medium text-gray-500">
              Help & Settings
            </p>

            <SidebarSection
              Icon={BsPatchExclamation}
              text="Help & Center"
              to="/help"
            />
            <SidebarSection Icon={CiSettings} text="Settings" to="/settings" />
            <SidebarSection Icon={BiFlag} text="Report" to="/report" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
