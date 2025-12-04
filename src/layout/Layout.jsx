
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="flex w-full">
        <div className="hidden md:block w-64 border-r border-slate-200 h-screen fixed bg-white mt-16">
          <Sidebar />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
