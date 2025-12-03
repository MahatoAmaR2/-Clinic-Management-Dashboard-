import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, CalendarCheck, DollarSign } from "lucide-react";


const data = [
  { name: "Mon", patients: 12 },
  { name: "Tue", patients: 19 },
  { name: "Wed", patients: 15 },
  { name: "Thu", patients: 22 },
  { name: "Fri", patients: 30 },
  { name: "Sat", patients: 25 },
];

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
    <div className={`p-4 rounded-full ${color} text-white`}>{icon}</div>
    <div>
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
    </div>
  </div>
);
const Appointments = () => {
  return (
    <div className="flex-1 md:w-9/12 md:ml-64 p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Clinic Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <StatCard
          title="Total Patients"
          value="1,240"
          icon={<Users size={24} />}
          color="bg-red-500"
        />
        <StatCard
          title="Appointments Today"
          value="42"
          icon={<CalendarCheck size={24} />}
          color="bg-emerald-500"
        />
        <StatCard
          title="Revenue (M)"
          value="$12.5k"
          icon={<DollarSign size={24} />}
          color="bg-purple-500"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 ">
        <h3 className="text-lg font-semibold mb-4">Patient Visits Trend</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="patients"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 5, fill: "#ef4444" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
