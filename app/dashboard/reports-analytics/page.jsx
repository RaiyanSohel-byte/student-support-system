"use client";
import React from "react";
import {
  ChevronDown,
  Search,
  Filter,
  Calendar,
  Building2,
  Activity,
  Users,
  Sparkles,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const CombinedReportsDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 text-slate-900">
      {" "}
      {/* 6. INDIVIDUAL PERFORMANCE SECTION */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden mb-20">
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
              JS
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">John Smith</h4>
              <p className="text-slate-400 text-sm font-medium">
                IT Support • Senior IT Agent
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <StatBox
              label="TOTAL"
              value="24"
              color="bg-[#E0F7FA] text-slate-900"
            />
            <StatBox
              label="RESOLVED"
              value="18"
              color="bg-[#F0FDF4] text-slate-900"
            />
            <StatBox
              label="OPEN"
              value="4"
              color="bg-[#F8FAFC] text-slate-900"
            />
            <StatBox
              label="AVG RES"
              value="3.8h"
              color="bg-[#F8FAFC] text-slate-900"
            />
          </div>
        </div>

        <div className="px-8 py-4">
          <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
            Individual Ticket Performance
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F8FAFC] border-y border-slate-100">
              <tr>
                <th className="py-4 px-8 text-[11px] font-bold text-slate-400 uppercase">
                  Ticket
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  Student
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  ID
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  Subject
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  Category
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  Priority
                </th>
                <th className="py-4 px-4 text-[11px] font-bold text-slate-400 uppercase">
                  Status
                </th>
                <th className="py-4 px-8 text-[11px] font-bold text-slate-400 uppercase text-right">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {bottomTableData.map((ticket, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-5 px-8 text-sm font-medium text-slate-400">
                    {ticket.id}
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${ticket.avatarColor}`}
                      >
                        {ticket.initials}
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {ticket.student}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm font-medium text-slate-400">
                    {ticket.studentId}
                  </td>
                  <td className="py-5 px-4 text-sm font-bold text-[#3B82F6]">
                    {ticket.subject}
                  </td>
                  <td className="py-5 px-4 text-sm font-medium text-slate-500">
                    {ticket.category}
                  </td>
                  <td className="py-5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight ${ticket.priorityColor}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-5 px-4">
                    <span className="px-3 py-1 bg-[#DCFCE7] text-[#16A34A] text-xs font-bold rounded-lg">
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-400 text-right">
                    {ticket.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* SECTION 1: TICKET PERFORMANCE (FROM IMAGE) */}
      <div className=" mb-12 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Top Header with Stats */}
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-tight">
              Ticket Performance{" "}
              <span className="text-slate-900 underline cursor-pointer ml-1">
                All Tickets
              </span>
            </h2>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">97</p>
                <p className="text-[10px] font-bold text-teal-500 uppercase">
                  Total
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">81</p>
                <p className="text-[10px] font-bold text-teal-500 uppercase">
                  Resolved
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">16</p>
                <p className="text-[10px] font-bold text-orange-500 uppercase">
                  Open
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="p-4 bg-white flex gap-4 items-center border-b border-slate-50">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search student, ticket ID, subject, staff..."
                className="w-full pl-12 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
            <button className="bg-[#009688] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-[#00796B] transition-colors">
              <Search size={18} /> Search
            </button>
            <div className="relative min-w-[160px]">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 focus:outline-none">
                <option>Priority</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50">
                  <th className="px-6 py-4">Ticket</th>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Id</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Staff</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {topTableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-400 font-medium">
                      {row.ticket}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full ${row.color} flex items-center justify-center text-white text-[10px] font-bold`}
                        >
                          {row.initials}
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 leading-none">
                            {row.student}
                          </p>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {row.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-medium">
                      {row.id}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {row.subject}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{row.category}</td>
                    <td className="px-6 py-4 text-slate-500">{row.dept}</td>
                    <td className="px-6 py-4 text-slate-500">{row.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ticket Trends Chart Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-8">
            Ticket Trends
          </h2>
          <div className="relative h-[300px] w-full">
            {/* SVG Area Chart Mockup */}
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 C100,150 200,120 300,110 C400,100 500,130 600,100 C750,60 850,50 1000,60 L1000,300 L0,300 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0,200 C100,150 200,120 300,110 C400,100 500,130 600,100 C750,60 850,50 1000,60"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Grid Lines */}
              {[0, 70, 140, 210, 280].map((val, i) => (
                <g key={i}>
                  <line
                    x1="0"
                    y1={300 - val * 1.07}
                    x2="1000"
                    y2={300 - val * 1.07}
                    stroke="#F1F5F9"
                    strokeDasharray="4"
                  />
                  <text
                    x="-10"
                    y={300 - val * 1.07}
                    className="text-[12px] fill-slate-400 font-medium"
                    textAnchor="end"
                  >
                    {val}
                  </text>
                </g>
              ))}
            </svg>
            <div className="flex justify-between mt-4 px-2">
              {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map(
                (month) => (
                  <span
                    key={month}
                    className="text-xs font-bold text-slate-400"
                  >
                    {month}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 mb-12 mx-auto" />
      {/* SECTION: ANALYTICS OVERVIEW (FROM reports3.png) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Card 1: Ticket Categories */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-8">
            Ticket Categories
          </h2>
          <div className="flex items-center gap-12">
            <div className="relative w-48 h-48">
              <svg
                viewBox="0 0 36 36"
                className="w-full h-full transform -rotate-90"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="4"
                  strokeDasharray="35, 100"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="4"
                  strokeDasharray="25, 100"
                  strokeDashoffset="-35"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#FB923C"
                  strokeWidth="4"
                  strokeDasharray="20, 100"
                  strokeDashoffset="-60"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#A3E635"
                  strokeWidth="4"
                  strokeDasharray="15, 100"
                  strokeDashoffset="-80"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#A855F7"
                  strokeWidth="4"
                  strokeDasharray="5, 100"
                  strokeDashoffset="-95"
                />
              </svg>
            </div>
            <div className="flex-1 space-y-4">
              {[
                { label: "Technical", count: 435, color: "bg-[#22D3EE]" },
                { label: "Academic", count: 312, color: "bg-[#4ADE80]" },
                { label: "Financial", count: 256, color: "bg-[#FB923C]" },
                { label: "Administrative", count: 178, color: "bg-[#A3E635]" },
                { label: "Other", count: 66, color: "bg-[#A855F7]" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Resolution Time & Ticket Status */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              Resolution Time
            </h2>
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full transform -rotate-125"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute text-center">
                  <p className="text-2xl font-black text-slate-900">4.2h</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    hours
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-900 mt-2">
                Average Resolution
              </p>

              {/* Sparkline for resolution */}
              <div className="w-full h-24 mt-4">
                <svg viewBox="0 0 200 60" className="w-full h-full">
                  <path
                    d="M10,20 L40,35 L70,30 L100,35 L130,40 L160,45 L190,42"
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth="2"
                  />
                  {[10, 40, 70, 100, 130, 160, 190].map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={[20, 35, 30, 35, 40, 45, 42][i]}
                      r="2.5"
                      fill="white"
                      stroke="#4ADE80"
                      strokeWidth="1.5"
                    />
                  ))}
                </svg>
                <div className="flex justify-between px-2">
                  {[
                    "Week 1",
                    "Week 2",
                    "Week 3",
                    "Week 4",
                    "Week 5",
                    "Week 6",
                    "Week 7",
                  ].map((w) => (
                    <span
                      key={w}
                      className="text-[8px] font-bold text-slate-400"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Ticket Status
            </h3>
            <div className="h-6 w-full flex rounded-lg overflow-hidden">
              <div
                className="bg-[#4CAF50] h-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ width: "85%" }}
              >
                1002
              </div>
              <div
                className="bg-[#FF9800] h-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ width: "15%" }}
              >
                89
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400">
              <span className="flex items-center gap-1">✓ Resolved</span>
              <span className="flex items-center gap-1">⏱ In Progress</span>
            </div>
          </div>
        </div>

        {/* Card 3: Department Performance */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8">
          <div className="flex items-center gap-2 mb-10">
            <BarChart3 size={20} className="text-blue-500" />
            <h2 className="text-lg font-bold text-slate-900">
              Department Performance
            </h2>
          </div>
          <div className="relative h-64 flex items-end justify-between px-4">
            {/* Grid Y-Axis */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] font-bold text-slate-300">
              <span>60</span>
              <span>45</span>
              <span>30</span>
              <span>15</span>
              <span>0</span>
            </div>

            {/* Grouped Bar Chart Mockup */}
            {[
              { dept: "IT", val: [35, 8, 5] },
              { dept: "HR", val: [52, 10, 8] },
              { dept: "Student", val: [32, 6, 2] },
              { dept: "Finance", val: [24, 8, 4] },
              { dept: "HR", val: [18, 5, 2] },
              { dept: "Technical", val: [30, 8, 3] },
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <div className="flex items-end gap-1">
                  <div
                    className="w-2.5 bg-[#A3E635] rounded-t-sm"
                    style={{ height: `${d.val[0] * 3}px` }}
                  />
                  <div
                    className="w-2.5 bg-[#22D3EE] rounded-t-sm"
                    style={{ height: `${d.val[1] * 3}px` }}
                  />
                  <div
                    className="w-2.5 bg-[#FB923C] rounded-t-sm"
                    style={{ height: `${d.val[2] * 3}px` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400">
                  {d.dept}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: Status Distribution */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8">
          <div className="flex items-center gap-2 mb-10">
            <Activity size={20} className="text-blue-500" />
            <h2 className="text-lg font-bold text-slate-900">
              Status Distribution
            </h2>
          </div>
          <div className="flex items-center justify-around h-64">
            {/* THE PIE CHART */}
            <div className="w-48 h-48 relative">
              <div
                className="w-full h-full rounded-full shadow-inner"
                style={{
                  background: `conic-gradient(
            #A3E635 0% 87%, 
            #22D3EE 87% 97%, 
            #FB923C 97% 100%
          )`,
                }}
              >
                {/* Optional: White border lines between slices */}
                <div className="absolute inset-0 rounded-full border-[6px] border-white/20 pointer-events-none" />
              </div>

              {/* Center Label - If you want it truly solid, remove this div. 
          If you want a "Filled" look with data in the middle, keep it. */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-xl font-black text-slate-900">
                    100%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#A3E635]" />
                  <span className="text-[11px] font-bold text-slate-600">
                    Resolved: 87%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#22D3EE]" />
                  <span className="text-[11px] font-bold text-slate-600">
                    In Progress: 10%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FB923C]" />
                  <span className="text-[11px] font-bold text-slate-600">
                    Escalated: 3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const CategoryProgress = ({ label, count, color, percentage }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="text-sm font-black text-slate-900">{count}</span>
    </div>
    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${color}`}
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

const FilterDropdown = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-slate-900">{label}</label>
    <div className="relative">
      <div className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-sm font-medium flex justify-between items-center cursor-pointer hover:border-slate-300 transition-colors">
        {value} <ChevronDown size={16} className="text-slate-400" />
      </div>
    </div>
  </div>
);

const StatBox = ({ label, value, color }) => (
  <div
    className={`${color} rounded-xl px-6 py-3 flex flex-col items-center justify-center min-w-[100px]`}
  >
    <span className="text-[40px] font-black leading-none">{value}</span>
    <span className="text-[10px] font-black tracking-widest uppercase opacity-60 mt-1">
      {label}
    </span>
  </div>
);

// --- DATA ---

const topTableData = [
  {
    ticket: "#TKT-1001",
    student: "Akash Saha",
    initials: "AS",
    color: "bg-teal-500",
    id: "STU-2219",
    subject: "Software Installation",
    category: "Technical",
    dept: "IT Support",
    staff: "John Smith",
  },
  {
    ticket: "#TKT-1002",
    student: "Mahfudul Maruf",
    initials: "MM",
    color: "bg-orange-500",
    id: "STU-2205",
    subject: "Student Loan Query",
    category: "Financial",
    dept: "IT Support",
    staff: "John Smith",
  },
  {
    ticket: "#TKT-1003",
    student: "Shaikh Siraj",
    initials: "SS",
    color: "bg-purple-500",
    id: "STU-2203",
    subject: "Grade Appeal",
    category: "Administrative",
    dept: "IT Support",
    staff: "John Smith",
  },
  {
    ticket: "#TKT-1004",
    student: "Sajjad Ullah",
    initials: "SU",
    color: "bg-emerald-600",
    id: "STU-2213",
    subject: "Course Drop Request",
    category: "Administrative",
    dept: "IT Support",
    staff: "John Smith",
  },
  {
    ticket: "#TKT-1005",
    student: "Tanzil Hasan",
    initials: "TH",
    color: "bg-cyan-500",
    id: "STU-2218",
    subject: "Exam Room Change",
    category: "Administrative",
    dept: "IT Support",
    staff: "John Smith",
  },
];

const bottomTableData = [
  {
    id: "#TKT-1001",
    student: "Akash Saha",
    initials: "AS",
    avatarColor: "bg-[#00C853]",
    studentId: "STU-2217",
    subject: "Financial Aid",
    category: "Financial",
    priority: "Low",
    priorityColor: "bg-[#F0FDF4] text-[#16A34A]",
    status: "Resolved",
    date: "Jan 18",
  },
  {
    id: "#TKT-1002",
    student: "Mahfudul Maruf",
    initials: "MM",
    avatarColor: "bg-[#00B0FF]",
    studentId: "STU-2213",
    subject: "Student Loan Query",
    category: "Financial",
    priority: "Medium",
    priorityColor: "bg-[#FFFBEB] text-[#D97706]",
    status: "Resolved",
    date: "Jan 20",
  },
  {
    id: "#TKT-1003",
    student: "Shaikh Siraj",
    initials: "SS",
    avatarColor: "bg-[#D50000]",
    studentId: "STU-2298",
    subject: "Financial Aid",
    category: "Financial",
    priority: "Medium",
    priorityColor: "bg-[#FFFBEB] text-[#D97706]",
    status: "Resolved",
    date: "Jan 19",
  },
  {
    id: "#TKT-1004",
    student: "Sajjad Ullah",
    initials: "SU",
    avatarColor: "bg-[#AA00FF]",
    studentId: "STU-2288",
    subject: "Accommodation Issue",
    category: "Administrative",
    priority: "High",
    priorityColor: "bg-[#FEF2F2] text-[#DC2626]",
    status: "Resolved",
    date: "Feb 10",
  },
  {
    id: "#TKT-1005",
    student: "Tanzil Hasan",
    initials: "TH",
    avatarColor: "bg-[#6200EA]",
    studentId: "STU-2216",
    subject: "Accommodation Issue",
    category: "Administrative",
    priority: "Low",
    priorityColor: "bg-[#F0FDF4] text-[#16A34A]",
    status: "Resolved",
    date: "Jan 16",
  },
];

export default CombinedReportsDashboard;
