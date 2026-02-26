"use client";
import React, { useState } from "react";
import {
  Search,
  Bell,
  Sparkles,
  Clock,
  CheckCircle2,
  ShieldAlert,
  Ticket,
  ArrowLeft,
  Send,
  FileText,
  MessageSquare,
  LogOut,
  LayoutDashboard,
  BookOpen,
  Users,
  Share2,
} from "lucide-react";

const AcademySupportPortal = () => {
  const [currentView, setCurrentView] = useState("list"); // 'list' or 'detail'

  // --- MOCK DATA ---
  const stats = [
    {
      label: "Assigned Tickets",
      value: "0",
      icon: <Ticket size={20} />,
      color: "text-cyan-500",
      bg: "bg-white",
    },
    {
      label: "AI Escalated",
      value: "0",
      icon: <ShieldAlert size={20} />,
      color: "text-orange-500",
      bg: "bg-white",
    },
    {
      label: "In Progress",
      value: "1",
      icon: <Clock size={20} />,
      color: "text-lime-500",
      bg: "bg-white",
    },
    {
      label: "Resolved Today",
      value: "1",
      icon: <CheckCircle2 size={20} />,
      color: "text-emerald-500",
      bg: "bg-white",
    },
  ];

  // --- SUB-COMPONENTS ---
  const Badge = ({ text, color }) => (
    <span
      className={`${color} px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight`}
    >
      {text}
    </span>
  );

  const SidebarItem = ({ icon: Icon, label, active = false }) => (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
        active ? "bg-cyan-100 text-cyan-600" : "text-gray-400 hover:bg-gray-50"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="flex p-8 min-h-screen bg-white text-slate-900">
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <div className="px-10 pb-10">
          {currentView === "list" ?
            /* --- VIEW A: TICKET DASHBOARD --- */
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="bg-gray-50/50 rounded-[32px] p-10 mb-8 border border-gray-100">
                <h1 className="text-4xl font-bold text-slate-900 mb-1">
                  Welcome back, Support!
                </h1>
                <p className="text-gray-400 font-medium">
                  Monday, January 26, 2026
                </p>
              </div>

              <div className="grid grid-cols-4 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-[24px] p-8 flex justify-between items-start shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                        {stat.label}
                      </p>
                      <h2 className="text-4xl font-extrabold">{stat.value}</h2>
                    </div>
                    <div className={`${stat.color} p-3 bg-gray-50 rounded-2xl`}>
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mb-8">
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className="w-full pl-14 pr-6 py-5 bg-white border border-gray-200 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-cyan-50/50 transition-all text-sm font-medium"
                />
              </div>

              <div className="space-y-4">
                <div
                  onClick={() => setCurrentView("detail")}
                  className="bg-white border border-gray-100 rounded-[32px] p-8 hover:border-cyan-200 transition-all cursor-pointer shadow-sm group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4">
                      <div className="mt-1 w-12 h-12 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600">
                          How do I register for classes?
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          How do I register for classes......
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400">
                        23/01/2026, 00:15:32
                      </p>
                      <p className="text-xs font-bold text-cyan-500 mt-2">
                        1 response
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-gray-300">
                      #TKT-1769105732566-805
                    </span>
                    <Badge text="assigned" color="bg-cyan-50 text-cyan-500" />
                    <Badge text="high" color="bg-orange-50 text-orange-500" />
                    <Badge text="academic" color="bg-lime-50 text-lime-500" />
                    <span className="ml-auto text-xs font-bold text-gray-400 italic">
                      Assigned to:{" "}
                      <span className="text-slate-800">Dr. Sarah Faculty</span>
                    </span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-50">
                    <p className="text-xs font-bold text-cyan-400 flex items-center gap-2">
                      <Sparkles size={14} /> AI:{" "}
                      <span className="underline italic">
                        Found relevant article: "How to Register for Classes"
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          : /* --- VIEW B: TICKET DETAIL --- */
            <div className="animate-in slide-in-from-right-4 duration-500 p-8">
              <button
                onClick={() => setCurrentView("list")}
                className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-8 hover:text-cyan-600 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Tickets
              </button>

              <div className="flex justify-between items-start mb-10">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
                    How do I register for classes?
                  </h2>
                  <p className="text-gray-500 font-medium mb-6">
                    How do I register for classes......
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-mono text-gray-300 mr-2">
                      #TKT-1769105732566-805
                    </span>
                    <Badge text="assigned" color="bg-cyan-50 text-cyan-600" />
                    <Badge text="high" color="bg-orange-50 text-orange-600" />
                    <Badge text="academic" color="bg-lime-50 text-lime-600" />
                    <Badge
                      text="Academic Affairs"
                      color="bg-cyan-50 text-cyan-600"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-[20px] font-bold shadow-xl shadow-orange-100 hover:scale-105 transition-transform">
                    <ShieldAlert size={20} /> Escalate
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 bg-lime-500 text-white rounded-[20px] font-bold shadow-xl shadow-lime-100 hover:scale-105 transition-transform">
                    <CheckCircle2 size={20} /> Resolve
                  </button>
                </div>
              </div>

              {/* METADATA */}
              <div className="grid grid-cols-4 gap-12 py-8 border-b border-gray-100 mb-10">
                {[
                  { label: "Student", value: "John Student" },
                  { label: "Category", value: "Technical" },
                  { label: "Department", value: "IT Support" },
                  { label: "Created", value: "26/01/2026" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    <p className="text-base font-extrabold text-slate-800">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CONVERSATION FLOW */}
              <div className="space-y-10 mb-12">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-cyan-500" />
                  <h4 className="font-extrabold text-xl text-slate-800">
                    Conversation (1)
                  </h4>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-100">
                    MS
                  </div>
                  <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-extrabold text-sm text-slate-900">
                        Mike Support{" "}
                        <span className="text-gray-400 font-medium ml-1">
                          (Support)
                        </span>
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        15/01/2025, 11:00:00
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      I have reset your Canvas password. Please check your email
                      for the temporary password and change it upon first login.
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-100">
                    JS
                  </div>
                  <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-extrabold text-sm text-slate-900">
                        John Student{" "}
                        <span className="text-gray-400 font-medium ml-1">
                          (Student)
                        </span>
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        23/01/2026, 04:18:39
                      </span>
                    </div>
                    <p className="text-slate-800 text-sm font-extrabold italic">
                      Tnahks
                    </p>
                  </div>
                </div>
              </div>

              {/* REPLY SECTION */}
              <div className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    System Chat Reply (Visible to student)
                  </label>
                  <button className="text-cyan-500 text-xs font-bold flex items-center gap-1 hover:underline">
                    <Sparkles size={14} /> AI Suggestions
                  </button>
                </div>
                <textarea
                  placeholder="Type your message to the student..."
                  className="w-full h-44 bg-white border border-gray-200 rounded-[24px] p-8 text-sm focus:outline-none focus:ring-4 focus:ring-cyan-50/50 shadow-inner transition-all mb-8 font-medium"
                />
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 px-10 py-4 bg-cyan-500 text-white rounded-[18px] font-extrabold text-sm shadow-xl shadow-cyan-100 hover:bg-cyan-600 transition-colors">
                    <Send size={18} /> Send Reply
                  </button>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-[18px] font-extrabold text-sm hover:bg-gray-50 transition-colors">
                    <FileText size={18} /> Templates
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default AcademySupportPortal;
