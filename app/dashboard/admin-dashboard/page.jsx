"use client";
import React from "react";
import withAuth from "@/app/hocs/withAuth";
import {
  Ticket,
  Clock,
  Activity,
  CheckCircle2,
  Users,
  UserSquare2,
  BookOpen,
  FileText,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      label: "All Tickets",
      value: "1",
      icon: Ticket,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      sub: "Total",
    },
    {
      label: "Open & Assigned",
      value: "0",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "bg-orange-50",
      sub: "Pending",
    },
    {
      label: "In Progress",
      value: "0",
      icon: Activity,
      color: "text-lime-500",
      bgColor: "bg-lime-50",
      sub: "Active",
    },
    {
      label: "Resolved Today",
      value: "0",
      icon: CheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-50",
      sub: "Today",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen text-slate-800">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">
          Welcome back, Dr. Jacob!
        </h1>
        <p className="text-slate-400 font-medium">Sunday, January 25, 2026</p>
        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-2">
          Faculty / Admin Dashboard
        </p>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bgColor} p-3 rounded-2xl`}>
                <stat.icon className={`${stat.color} w-6 h-6`} />
              </div>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter mt-1">
                {stat.sub}
              </span>
            </div>
            <div className="mt-auto">
              <h2 className="text-4xl font-black text-slate-900 mb-1">
                {stat.value}
              </h2>
              <p className="text-sm font-bold text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-[20px] border-2 border-sky-100 flex items-center gap-4">
          <div className="bg-sky-50 p-3 rounded-xl">
            <Users className="text-sky-500 w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-sky-600">1</span>
              <span className="text-sm font-bold text-sky-500">
                Active Students
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[20px] border-2 border-green-100 flex items-center gap-4">
          <div className="bg-green-50 p-3 rounded-xl">
            <UserSquare2 className="text-green-500 w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-green-600">1</span>
              <span className="text-sm font-bold text-green-500">
                Support Agents
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[20px] border-2 border-lime-100 flex items-center gap-4">
          <div className="bg-lime-50 p-3 rounded-xl">
            <BookOpen className="text-lime-500 w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-lime-600">5</span>
              <span className="text-sm font-bold text-lime-500">
                KB Articles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tickets Section */}
      <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm mb-8 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FileText className="text-sky-400 w-5 h-5" />
            <h3 className="text-lg font-bold text-slate-900">Recent Tickets</h3>
          </div>
          <span className="text-xs font-bold text-slate-300">1 tickets</span>
        </div>

        <div className="p-6 rounded-[20px] border border-slate-50 bg-slate-50/30">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-300 italic tracking-widest">
                TKT-1705000001-123
              </span>
              <TrendingUp className="w-3 h-3 text-orange-400" />
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                Resolved
              </span>
            </div>
            <span className="text-[11px] font-bold text-slate-300">
              15/01/2025
            </span>
          </div>
          <h4 className="text-md font-bold text-slate-900 mb-2">
            Unable to access Canvas LMS
          </h4>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed">
            I am getting an error when trying to log into Canvas. The page shows
            "Invalid credentials" even though my password is correct.
          </p>
          <div className="flex gap-4">
            <p className="text-[11px] font-bold text-slate-400">
              Student:<span className="text-slate-600"> John Student</span>
            </p>
            <p className="text-[11px] font-bold text-slate-400">
              Category:<span className="text-slate-600"> Technical</span>
            </p>
            <p className="text-[11px] font-bold text-slate-400">
              Department:<span className="text-slate-600"> IT Support</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ticket Categories Chart */}
        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="text-sky-400 w-5 h-5" />
            <h3 className="text-lg font-bold text-slate-900">
              Ticket Categories
            </h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-600 w-24">
                Technical
              </span>
              <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-400 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span className="text-sm font-black text-slate-900">1</span>
            </div>
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="text-green-500 w-5 h-5" />
            <h3 className="text-lg font-bold text-slate-900">
              System Performance
            </h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-400">Satisfaction Rate</span>
                <span className="text-green-500 font-black text-lg">5%</span>
              </div>
              <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-400">AI Resolution Rate</span>
                <span className="text-sky-500 font-black text-lg">0%</span>
              </div>
              <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-400"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
              <span className="text-sm font-bold text-slate-400">
                Avg Resolution Time
              </span>
              <span className="text-xl font-black text-orange-500">3.83h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminDashboard, ["admin"]);
