import React from "react";
import {
  Ticket,
  Clock,
  Activity,
  CheckCircle2,
  Users,
  BookOpen,
  FileText,
  BarChart2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const SuperAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 text-slate-900 relative">
      {/* 1. WELCOME HEADER */}
      <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm mb-6">
        <h1 className="text-[32px] font-extrabold text-slate-900 mb-2 tracking-tight">
          Welcome back, Dr. Jacob!
        </h1>
        <p className="text-slate-500 font-medium text-sm mb-1">
          Sunday, January 25, 2026
        </p>
        <p className="text-slate-400 text-sm">Faculty / Admin Dashboard</p>
      </div>

      {/* 2. TOP METRICS GRID */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <MetricCard
          icon={<Ticket size={20} />}
          iconBg="bg-cyan-50 text-cyan-500"
          topLabel="Total"
          number="1"
          bottomLabel="All Tickets"
        />
        <MetricCard
          icon={<Clock size={20} />}
          iconBg="bg-orange-50 text-orange-500"
          topLabel="Pending"
          number="0"
          bottomLabel="Open & Assigned"
        />
        <MetricCard
          icon={<Activity size={20} />}
          iconBg="bg-lime-50 text-lime-500"
          topLabel="Active"
          number="0"
          bottomLabel="In Progress"
        />
        <MetricCard
          icon={<CheckCircle2 size={20} />}
          iconBg="bg-emerald-50 text-emerald-500"
          topLabel="Today"
          number="0"
          bottomLabel="Resolved Today"
        />
      </div>

      {/* 3. MIDDLE ENTITY STATS */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[24px] p-6 flex items-start gap-5 shadow-sm">
          <Users size={28} className="text-blue-600 mt-1" />
          <div>
            <h3 className="text-[28px] font-extrabold text-slate-900 leading-none mb-2">
              1
            </h3>
            <p className="text-sm font-bold text-blue-600">Active Students</p>
          </div>
        </div>
        <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[24px] p-6 flex items-start gap-5 shadow-sm">
          <Users size={28} className="text-emerald-600 mt-1" />
          <div>
            <h3 className="text-[28px] font-extrabold text-slate-900 leading-none mb-2">
              1
            </h3>
            <p className="text-sm font-bold text-emerald-600">Support Agents</p>
          </div>
        </div>
        <div className="bg-[#FCFDEB] border border-[#ECFCCB] rounded-[24px] p-6 flex items-start gap-5 shadow-sm">
          <BookOpen size={28} className="text-[#84CC16] mt-1" />
          <div>
            <h3 className="text-[28px] font-extrabold text-slate-900 leading-none mb-2">
              5
            </h3>
            <p className="text-sm font-bold text-[#84CC16]">KB Articles</p>
          </div>
        </div>
      </div>

      {/* 4. RECENT TICKETS LIST */}
      <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <FileText size={20} className="text-cyan-500" /> Recent Tickets
          </h2>
          <span className="text-sm text-slate-400 font-medium">1 tickets</span>
        </div>

        <div className="border border-slate-100 rounded-[20px] p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-slate-400">
                TKT-1705000001-123
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md">
                resolved
              </span>
            </div>
            <span className="text-sm font-medium text-slate-400">
              15/01/2025
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Unable to access Canvas LMS
          </h3>
          <p className="text-slate-500 text-sm mb-4 leading-relaxed">
            I am getting an error when trying to log into Canvas. The page shows
            "Invalid credentials" even though my password is correct.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <p>
              Student:{" "}
              <span className="font-bold text-slate-700">John Student</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-bold text-slate-700">Technical</span>
            </p>
            <p>
              Department:{" "}
              <span className="font-bold text-slate-700">IT Support</span>
            </p>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM PERFORMANCE CHARTS */}
      <div className="grid grid-cols-2 gap-6 pb-20">
        {/* Ticket Categories */}
        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-8">
            <BarChart2 size={20} className="text-cyan-500" /> Ticket Categories
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700 w-24">
              Technical
            </span>
            <div className="flex-1 mx-4 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-full rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-slate-900 w-4 text-right">
              1
            </span>
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-8">
            <TrendingUp size={20} className="text-emerald-500" /> System
            Performance
          </h2>
          <div className="space-y-6">
            <ProgressBar
              label="Satisfaction Rate"
              value="5%"
              valueColor="text-[#84CC16]"
              fill="w-[5%]"
            />
            <ProgressBar
              label="AI Resolution Rate"
              value="0%"
              valueColor="text-cyan-500"
              fill="w-0"
            />
            <ProgressBar
              label="Avg Resolution Time"
              value="3.83h"
              valueColor="text-orange-500"
              fill="w-0"
            />
          </div>
        </div>
      </div>

      {/* FLOATING AI ASSISTANT */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-200 hover:scale-105 transition-transform z-50">
        <Sparkles size={28} />
      </button>
    </div>
  );
};

// --- SUB COMPONENTS ---

const MetricCard = ({ icon, iconBg, topLabel, number, bottomLabel }) => (
  <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col justify-between h-40">
    <div className="flex justify-between items-start">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
      <span className="text-xs font-medium text-slate-400">{topLabel}</span>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-slate-900 leading-none">
        {number}
      </h3>
      <p className="text-sm text-slate-500 mt-2 font-medium">{bottomLabel}</p>
    </div>
  </div>
);

const ProgressBar = ({ label, value, valueColor, fill }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <span className={`text-sm font-bold ${valueColor}`}>{value}</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full bg-slate-200 rounded-full ${fill}`}></div>
    </div>
  </div>
);

export default SuperAdminDashboard;
