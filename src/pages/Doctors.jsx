import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserMd, FaStar } from "react-icons/fa";
import { FiMapPin, FiCalendar } from "react-icons/fi";

const doctorsList = [
  {
    name: "Dr. Bauaa",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    location: "Room 204",
    available: "Mon, Wed, Fri",
  },
  {
    name: "Dr. Arjun Mehta",
    specialty: "Dermatologist",
    rating: 4.7,
    reviews: 98,
    location: "Room 112",
    available: "Tue, Thu",
  },
  {
    name: "Dr. Sophia Rao",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 143,
    location: "Room 310",
    available: "Mon–Fri",
  },
  {
    name: "Dr. Michael Singh",
    specialty: "Orthopedic Surgeon",
    rating: 4.6,
    reviews: 89,
    location: "Room 121",
    available: "Mon, Wed, Sat",
  },
  {
    name: "Dr. Aisha Khan",
    specialty: "Gynecologist",
    rating: 4.8,
    reviews: 132,
    location: "Room 215",
    available: "Tue, Thu, Sat",
  },
  {
    name: "Dr. Rohit Verma",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 160,
    location: "Room 105",
    available: "Mon–Sat",
  },
];

const Doctors = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctorsList.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 md:ml-64 p-6 mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-bold text-red-600">Doctors List</h2>

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
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((d, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-4 bg-red-500 text-white rounded-full">
                  <FaUserMd size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800">{d.name}</h3>
                  <p className="text-sm text-slate-500">{d.specialty}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <FaStar className="text-yellow-500" />
                <p className="text-sm font-semibold text-gray-700">
                  {d.rating}{" "}
                  <span className="text-gray-500">({d.reviews} reviews)</span>
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <FiMapPin className="text-red-500" /> {d.location}
                </p>

                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <FiCalendar className="text-red-500" /> {d.available}
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-white border border-red-300 text-red-600 py-2 rounded font-medium hover:bg-red-50 transition cursor-pointer">
                  Profile
                </button>

                <button className="flex-1 bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition cursor-pointer">
                  Book
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-medium">No doctor found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
