import React from "react";
import { HelpCircle, Info, AlertTriangle, BookOpen } from "lucide-react";

const Help = () => {
  return (
    <div className="flex-1 md:ml-64 p-6 mt-16">
      <h2 className="text-2xl font-bold text-red-600">Help & Support</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition cursor-pointer">
          <div className="p-4 bg-red-500 text-white rounded-lg inline-block">
            <HelpCircle size={28} />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Support</h3>
          <p className="text-gray-600 text-sm mt-1">
            Get help for navigating the dashboard, managing data, and solving
            issues.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition cursor-pointer">
          <div className="p-4 bg-red-500 text-white rounded-lg inline-block">
            <Info size={28} />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Overview</h3>
          <p className="text-gray-600 text-sm mt-1">
            Learn how the dashboard works with a quick step-by-step guide.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition cursor-pointer">
          <div className="p-4 bg-red-500 text-white rounded-lg inline-block">
            <AlertTriangle size={28} />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">
            Common Issues
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            See common errors like login, charts, or data issues and how to fix
            them.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition cursor-pointer">
          <div className="p-4 bg-red-500 text-white rounded-lg inline-block">
            <BookOpen size={28} />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">Examples</h3>
          <p className="text-gray-600 text-sm mt-1">
            Learn with examples: adding patients, doctors, bookings, and
            reports.
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8 ml-1">
        <section>
          <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
            <HelpCircle size={22} /> Support
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Use this dashboard to manage patients, doctors, appointments,
            analytics, and more. For quick help, check FAQs or contact the
            admin.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
            <Info size={22} /> Overview
          </h3>
          <ul className="text-gray-600 mt-2 list-disc ml-6 space-y-1 text-sm">
            <li>Use the sidebar to navigate between dashboard pages.</li>
            <li>Check analytics in the Dashboard Overview section.</li>
            <li>
              Add or edit patients and doctors easily from respective pages.
            </li>
            <li>Use charts to track hospital performance.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
            <AlertTriangle size={22} /> Common Issues
          </h3>
          <ul className="text-gray-600 mt-2 list-disc ml-6 space-y-1 text-sm">
            <li>Sidebar not showing? Refresh the page.</li>
            <li>Charts not rendering? Check if data format is correct.</li>
            <li>
              Data missing? Ensure component state or fetch API is working.
            </li>
            <li>Styling broken? Confirm Tailwind is configured properly.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
            <BookOpen size={22} /> Examples
          </h3>
          <ul className="text-gray-600 mt-2 list-disc ml-6 space-y-1 text-sm">
            <li>Add new patient using the "Add Patient" button.</li>
            <li>Use charts in Dashboard to track hospital statistics.</li>
            <li>Edit doctor details from the Doctors page.</li>
            <li>Delete or update appointments from the Appointments page.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Help;
