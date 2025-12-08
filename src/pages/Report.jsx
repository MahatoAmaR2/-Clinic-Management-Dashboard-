import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Download, Calendar, Filter, Printer, FileSpreadsheet } from 'lucide-react';

const Reports = () => {
 
  const financialData = [
    { month: 'Jan', income: 4000, expense: 2400 },
    { month: 'Feb', income: 3000, expense: 1398 },
    { month: 'Mar', income: 2000, expense: 9800 },
    { month: 'Apr', income: 2780, expense: 3908 },
    { month: 'May', income: 1890, expense: 4800 },
    { month: 'Jun', income: 2390, expense: 3800 },
  ];

  const recentReports = [
    { id: 1, name: 'Monthly Financial Summary', date: 'Oct 01, 2023', type: 'PDF', size: '2.4 MB', status: 'Ready' },
    { id: 2, name: 'Q3 Patient Demographics', date: 'Sep 30, 2023', type: 'CSV', size: '1.1 MB', status: 'Ready' },
    { id: 3, name: 'Doctor Performance Review', date: 'Sep 28, 2023', type: 'PDF', size: '4.2 MB', status: 'Ready' },
    { id: 4, name: 'Inventory Usage Report', date: 'Sep 25, 2023', type: 'CSV', size: '0.8 MB', status: 'Archived' },
  ];

  return (
    <div className="space-y-6  md:ml-64 mt-18 pl-6 pr-4">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Reports</h2>
          <p className="text-slate-500 text-sm">Generate and export clinic statistics.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm font-medium">
            <Calendar size={16} />
            <span>This Month</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition text-sm font-medium">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium">
            <Printer size={16} />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Income vs Expenses</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={financialData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} prefix="$" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="income" name="Income" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="expense" name="Expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Create Custom Report</h3>
            <p className="text-slate-500 text-sm mb-6">Select parameters to generate a new detailed analysis file.</p>
            
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Report Type</label>
                <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-red-100">
                  <option>Financial Statement</option>
                  <option>Patient Attendance</option>
                  <option>Doctor Efficiency</option>
                  <option>Inventory Log</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">File Format</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer p-3 border border-slate-200 rounded-lg w-full hover:bg-slate-50">
                    <input type="radio" name="format" defaultChecked className="text-red-600" />
                    <span className="text-sm font-medium">PDF</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-3 border border-slate-200 rounded-lg w-full hover:bg-slate-50">
                    <input type="radio" name="format" className="text-red-600" />
                    <span className="text-sm font-medium">CSV</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium cursor-pointer">
            Generate Now
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Available Reports</h3>
          <button className="text-red-600 text-sm font-medium hover:underline cursor-pointer">View All History</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
              <tr>
                <th className="p-4">Report Name</th>
                <th className="p-4">Date Generated</th>
                <th className="p-4">Status</th>
                <th className="p-4">Type</th>
                <th className="p-4">Size</th>
                
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-medium flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${report.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {report.type === 'PDF' ? <FileText size={18} /> : <FileSpreadsheet size={18} />}
                    </div>
                    {report.name}
                  </td>
                  <td className="p-4 text-slate-500">{report.date}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${report.status === 'Ready' ? 'bg-blue-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4">{report.type}</td>
                  <td className="p-4 text-slate-500">{report.size}</td>
                  
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-red-600 p-1">
                      <Download size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Reports;