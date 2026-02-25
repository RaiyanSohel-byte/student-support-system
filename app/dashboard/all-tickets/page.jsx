"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Clock,
  CheckCircle2,
  ArrowLeft,
  User,
  Calendar,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

// Mock Data matching your screenshots
const ALL_TICKETS = [
  {
    id: "TKT-1769105732566-805",
    title: "How do I register for classes?",
    desc: "How do I register for classes........",
    status: "Assigned",
    priority: "High",
    category: "Academic",
    dept: "Academic Affairs",
    student: "John Student",
    date: "23/01/2026",
    time: "00:15:32",
    aiArticle: "How to Register for Classes",
  },
  {
    id: "TKT-1705000001-123",
    title: "Unable to access Canvas LMS",
    desc: "I am getting an error when trying to log into Canvas...",
    status: "Resolved",
    priority: "Low",
    category: "Technical",
    dept: "IT Support",
    student: "John Student",
    date: "15/01/2025",
    time: "10:30:00",
    aiArticle: "Canvas LMS Access Guide",
  },
];

const STATUS_OPTIONS = [
  "All Status",
  "Open",
  "Assigned",
  "In progress",
  "Escalated",
  "Resolved",
  "Closed",
];
const PRIORITY_OPTIONS = ["All Priorities", "Low", "Medium", "High", "Urgent"];

const AllTicketsAdmin = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showStatusDrop, setShowStatusDrop] = useState(false);
  const [showPriorityDrop, setShowPriorityDrop] = useState(false);

  // --- SUB-COMPONENT: TICKET DETAIL VIEW ---
  if (selectedTicket) {
    return (
      <div className="p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={() => setSelectedTicket(null)}
          className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Tickets
        </button>

        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {selectedTicket.title}
              </h1>
              <p className="text-slate-500 mb-4">{selectedTicket.desc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-slate-300 italic mr-2 tracking-widest">
                  #{selectedTicket.id}
                </span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-500 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {selectedTicket.status}
                </span>
                <span className="px-3 py-1 bg-orange-50 text-orange-500 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {selectedTicket.priority}
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {selectedTicket.category}
                </span>
                <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                  {selectedTicket.dept}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all">
                Escalate
              </button>
              <button className="px-6 py-2 bg-lime-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-lime-200 hover:bg-lime-600 transition-all">
                Resolve
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-50">
            <div className="flex items-center gap-3">
              <div className="bg-slate-50 p-2 rounded-lg text-slate-400">
                <User size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  Student
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {selectedTicket.student}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-50 p-2 rounded-lg text-slate-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  Created
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {selectedTicket.date}, {selectedTicket.time}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-50 p-2 rounded-lg text-slate-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  Last Updated
                </p>
                <p className="text-sm font-bold text-slate-700">
                  {selectedTicket.date}, {selectedTicket.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN LIST VIEW ---
  return (
    <div className="p-8 space-y-6">
      <div className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-sky-100 transition-all text-sm"
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          {/* Status Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowStatusDrop(!showStatusDrop);
                setShowPriorityDrop(false);
              }}
              className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              <Filter size={18} /> All Status
            </button>
            {showStatusDrop && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-[20px] shadow-xl z-50 p-2 space-y-1">
                {STATUS_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${opt === "All Status" ? "bg-sky-100 text-sky-700 font-bold" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Priority Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowPriorityDrop(!showPriorityDrop);
                setShowStatusDrop(false);
              }}
              className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              All Priorities{" "}
              <ChevronDown
                size={18}
                className={`transition-transform ${showPriorityDrop ? "rotate-180" : ""}`}
              />
            </button>
            {showPriorityDrop && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-[20px] shadow-xl z-50 p-2 space-y-1">
                {PRIORITY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${opt === "All Priorities" ? "bg-sky-100 text-sky-700 font-bold" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs font-bold text-slate-400 px-1 italic">
        Showing {ALL_TICKETS.length} tickets
      </p>

      <div className="space-y-4">
        {ALL_TICKETS.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => setSelectedTicket(ticket)}
            className="group bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden p-6"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {ticket.status === "Resolved" ?
                  <CheckCircle2 className="text-lime-500 w-5 h-5" />
                : <Clock className="text-sky-400 w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {ticket.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-1 mb-4">
                      {ticket.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-bold text-slate-300">
                      {ticket.date}
                    </p>
                    <p className="text-[11px] font-bold text-slate-300 mb-1">
                      {ticket.time}
                    </p>
                    <span className="text-[11px] font-bold text-sky-400 uppercase italic">
                      1 response
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold text-slate-300 italic tracking-widest mr-2">
                    #{ticket.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${ticket.status === "Resolved" ? "bg-lime-50 text-lime-600" : "bg-cyan-50 text-cyan-500"}`}
                  >
                    {ticket.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${ticket.priority === "High" ? "bg-orange-50 text-orange-500" : "bg-lime-50 text-lime-600"}`}
                  >
                    {ticket.priority}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                    {ticket.category}
                  </span>
                </div>

                <div className="bg-sky-50/40 rounded-full py-2 px-4 flex items-center gap-2 border border-sky-50/50">
                  <Sparkles size={14} className="text-sky-400" />
                  <p className="text-[11px] font-bold text-sky-400">
                    AI:{" "}
                    <span className="font-medium text-slate-400 tracking-tight">
                      Found relevant article:
                    </span>{" "}
                    <span className="italic">"{ticket.aiArticle}"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTicketsAdmin;
