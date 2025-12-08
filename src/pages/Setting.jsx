import React, { useState } from 'react';
import { User, Bell, Lock, Shield, Save, Camera } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const ProfileSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-3xl font-bold relative">
          JD
          <button className="absolute bottom-0 right-0 bg-red-600 p-1.5 rounded-full text-white hover:bg-red-700">
            <Camera size={14} />
          </button>
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">Musk</h3>
          <p className="text-slate-500 text-sm">Administrator</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Full Name</label>
          <input type="text" defaultValue="Elon Musk" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Email Address</label>
          <input type="email" defaultValue="admin@medicare.com" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Phone Number</label>
          <input type="tel" defaultValue="+1 555 123 4567" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Role</label>
          <input type="text" defaultValue="Super Admin" disabled className="w-full p-2 border border-slate-200 bg-slate-50 rounded-lg text-slate-500 cursor-not-allowed" />
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Email Notifications</h3>
      {['Appointment Reminders', 'New Patient Registrations', 'Weekly Analytics Report', 'System Updates'].map((item, idx) => (
        <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
          <span className="text-slate-700 font-medium">{item}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">Change Password</h3>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Current Password</label>
          <input type="password" className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:border-red-500" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">New Password</label>
          <input type="password" className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:border-red-500" />
        </div>
      </div>
      
      <div className="pt-6 border-t border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Two-Factor Authentication</h3>
        <p className="text-slate-500 text-sm mb-4">Add an extra layer of security to your account.</p>
        <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition font-medium">
          Enable 2FA
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User, component: ProfileSettings },
    { id: 'notifications', label: 'Notifications', icon: Bell, component: NotificationSettings },
    { id: 'security', label: 'Security', icon: Lock, component: SecuritySettings },
  ];

  return (
    <div className="max-w-5xl mx-auto  md:ml-64 mt-18 pl-7 pr-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Settings</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <tab.icon size={18} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="animate-fade-in">
                <tab.component />
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2 cursor-pointer">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;