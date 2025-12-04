import React, { useState } from "react";
import { FaUserInjured } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const initialPatients = [
  {
    name: "Amit Sharma",
    age: 32,
    disease: "Fever & Cold",
    phone: "9876543210",
    email: "amit@example.com",
  },
  {
    name: "Priya Verma",
    age: 27,
    disease: "High BP",
    phone: "9988776655",
    email: "priya@example.com",
  },
  {
    name: "Rahul Singh",
    age: 41,
    disease: "Diabetes",
    phone: "9123456789",
    email: "rahul@example.com",
  },
  {
    name: "Ayant Bis",
    age: 60,
    disease: "High BP",
    phone: "9237490234",
    email: "ayant@example.com",
  },
  {
    name: "Vinod Singh",
    age: 40,
    disease: "Heart Issues",
    phone: "7327490234",
    email: "vinod@example.com",
  },
  {
    name: "Meena Das",
    age: 29,
    disease: "Thyroid",
    phone: "6743249034",
    email: "meena@example.com",
  },
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = initialPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 md:ml-64 p-6 mt-16">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-bold text-red-600">Patients List</h2>

        <div className="md:mt-0 mt-4 w-full sm:w-80 relative">
          <CiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={22}
          />
          <input
            type="text"
            placeholder="Search patient..."
            className="w-full pl-10 pr-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((p, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-4 bg-red-500 text-white rounded-full">
                <FaUserInjured size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                <p className="text-sm text-gray-500">Age: {p.age}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-red-600">Disease:</span>{" "}
                {p.disease}
              </p>

              <p className="flex items-center gap-2 text-gray-600 text-sm">
                <FiPhone className="text-red-500" /> {p.phone}
              </p>

              <p className="flex items-center gap-2 text-gray-600 text-sm">
                <AiOutlineMail className="text-red-500" /> {p.email}
              </p>
            </div>

            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition cursor-pointer">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
