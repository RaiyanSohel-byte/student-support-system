"use client";
import React from "react";
import {
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingUp,
  ChevronDown,
  Filter,
} from "lucide-react";

const ATTENDANCE_SUMMARY = [
  {
    label: "Total Classes",
    value: 100,
    icon: <Calendar className="text-slate-400" />,
    color: "border-slate-100",
  },
  {
    label: "Present",
    value: 89,
    icon: <CheckCircle2 className="text-green-500" />,
    color: "border-green-100",
  },
  {
    label: "Absent",
    value: 7,
    icon: <XCircle className="text-orange-500" />,
    color: "border-orange-100",
  },
  {
    label: "Excused",
    value: 4,
    icon: <AlertCircle className="text-sky-400" />,
    color: "border-sky-100",
  },
  {
    label: "Overall Rate",
    value: "89.0%",
    icon: <TrendingUp className="text-lime-500" />,
    color: "border-lime-100",
    isRate: true,
  },
];

const COURSE_ATTENDANCE = [
  {
    title: "Introduction to Programming",
    code: "CS101 • Dr. Smith",
    rate: "92.9%",
    status: "Excellent",
    stats: { total: 28, present: 26, absent: 1, excused: 1 },
    recent: [
      { date: "Feb 7", type: "present" },
      { date: "Feb 5", type: "present" },
      { date: "Feb 3", type: "present" },
      { date: "Jan 31", type: "excused" },
      { date: "Jan 29", type: "present" },
    ],
  },
  {
    title: "English Composition",
    code: "ENG102 • Prof. Williams",
    rate: "76.9%",
    status: "Warning",
    stats: { total: 26, present: 20, absent: 4, excused: 2 },
    warning:
      "Warning: Your attendance is approaching the minimum requirement. Please improve attendance.",
    recent: [
      { date: "Feb 7", type: "present" },
      { date: "Feb 5", type: "absent" },
      { date: "Feb 3", type: "present" },
      { date: "Jan 31", type: "absent" },
      { date: "Jan 29", type: "present" },
    ],
  },
];

const AttendanceReportPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 text-slate-800">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">
          My Attendance Report
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Track your attendance across all courses
        </p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {ATTENDANCE_SUMMARY.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#F9FAFB] p-4 rounded-2xl border ${item.color} shadow-sm flex items-center justify-between`}
          >
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                {item.label}
              </p>
              <p
                className={`text-xl font-black ${item.isRate ? "text-lime-500" : "text-slate-900"}`}
              >
                {item.value}
              </p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
        <Filter size={18} className="text-slate-400 ml-2" />
        <select className="bg-transparent text-sm font-bold text-slate-600 outline-none cursor-pointer pr-8">
          <option>All courses</option>
        </select>
      </div>

      {/* Course List */}
      <div className="space-y-6">
        {COURSE_ATTENDANCE.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {course.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${
                      course.status === "Excellent" ?
                        "bg-green-50 text-green-600"
                      : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    ✓ {course.status}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-400">
                  {course.code}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-green-500">
                  {course.rate}
                </p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                  Attendance Rate
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Total Classes",
                  val: course.stats.total,
                  bg: "bg-slate-50",
                },
                {
                  label: "Present",
                  val: course.stats.present,
                  bg: "bg-green-50/50",
                },
                {
                  label: "Absent",
                  val: course.stats.absent,
                  bg: "bg-orange-50/50",
                },
                {
                  label: "Excused",
                  val: course.stats.excused,
                  bg: "bg-sky-50/50",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`${stat.bg} rounded-xl p-4 text-center border border-white/50`}
                >
                  <p className="text-lg font-black text-slate-800">
                    {stat.val}
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Attendance Timeline */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Recent Attendance:
              </p>
              <div className="grid grid-cols-5 gap-2">
                {course.recent.map((day, i) => (
                  <div
                    key={i}
                    className={`
                    border rounded-xl p-3 flex flex-col items-center gap-1 transition-all
                    ${
                      day.type === "present" ? "border-[#48A548] bg-green-50/20"
                      : day.type === "absent" ?
                        "border-[#E86D1F] bg-orange-50/20"
                      : "border-sky-100 bg-sky-50/20"
                    }
                  `}
                  >
                    {day.type === "present" && (
                      <CheckCircle2 size={14} className="text-green-500" />
                    )}
                    {day.type === "absent" && (
                      <XCircle size={14} className="text-orange-500" />
                    )}
                    {day.type === "excused" && (
                      <div className="w-3 h-3 rounded-full border-2 border-sky-400" />
                    )}
                    <span className="text-[10px] font-bold text-slate-500">
                      {day.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Banner */}
            {course.warning && (
              <div className="mt-6 flex items-center gap-3 bg-orange-50 border border-orange-100 p-4 rounded-xl">
                <AlertCircle size={18} className="text-orange-500 shrink-0" />
                <p className="text-[11px] font-bold text-orange-700 leading-tight">
                  {course.warning}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceReportPage;
