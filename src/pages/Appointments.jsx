import React, { useState } from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const appointmentsList = [
  {
    patient: "John Doe",
    doctor: "Dr. Emily Chen",
    date: "Dec 5, 2025",
    time: "10:00 AM",
    problem: "Heart Checkup",
    status: "Confirmed",
  },
  {
    patient: "Sarah Connor",
    doctor: "Dr. Arjun Mehta",
    date: "Dec 6, 2025",
    time: "2:00 PM",
    problem: "Skin Rash",
    status: "Pending",
  },
  {
    patient: "Michael Smith",
    doctor: "Dr. Sophia Rao",
    date: "Dec 7, 2025",
    time: "11:30 AM",
    problem: "Headache",
    status: "Cancelled",
  },
  {
    patient: "Emma Wilson",
    doctor: "Dr. Michael Singh",
    date: "Dec 8, 2025",
    time: "1:00 PM",
    problem: "Knee Pain",
    status: "Confirmed",
  },
  {
    patient: "Priya Verma",
    doctor: "Dr. Aisha Khan",
    date: "Dec 9, 2025",
    time: "9:00 AM",
    problem: "Routine Checkup",
    status: "Pending",
  },
  {
    patient: "Rahul Singh",
    doctor: "Dr. Rohit Verma",
    date: "Dec 10, 2025",
    time: "3:30 PM",
    problem: "Fever",
    status: "Confirmed",
  },
];

const Appointments = () => {
  const [search, setSearch] = useState("");

 
  const filteredAppointments = appointmentsList.filter((a) =>
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex-1 md:ml-64 p-6 mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-bold text-red-600">Appointments</h2>

        <div className="md:mt-0 mt-4 w-full sm:w-80 relative">
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={22}
          />
          <input
            type="text"
            placeholder="Search patient..."
            className="w-full pl-10 pr-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((a, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-4 bg-red-500 text-white rounded-full">
                  <FiCalendar size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {a.patient}
                  </h3>
                  <p className="text-sm text-gray-500">{a.problem}</p>
                </div>
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <FaUserMd className="text-red-500" /> {a.doctor}
                </p>
                <p className="flex items-center gap-2">
                  <FiCalendar className="text-red-500" /> {a.date}
                </p>
                <p className="flex items-center gap-2">
                  <FiClock className="text-red-500" /> {a.time}
                </p>
              </div>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                  a.status
                )}`}
              >
                {a.status}
              </span>

              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-red-500 text-white py-2 rounded font-normal hover:bg-red-600 transition cursor-pointer ">
                  View Details
                </button>
                <button className="flex-1 bg-white border border-red-300 text-red-600 py-2 rounded font-normal hover:bg-red-50 transition cursor-pointer">
                  Reschedule
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-medium">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
