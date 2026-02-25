"use client";
import React from "react";
import {
  BookOpen,
  GraduationCap,
  BarChart3,
  Clock,
  MapPin,
  School,
} from "lucide-react";

const SUMMARY_STATS = [
  {
    label: "Current GPA",
    value: "3.63",
    subtext: "Based on 3 graded courses",
    icon: <GraduationCap className="text-lime-500" />,
    bg: "bg-white",
  },
  {
    label: "Enrolled Courses",
    value: "4",
    subtext: "This semester",
    icon: <BookOpen className="text-sky-400" />,
    bg: "bg-white",
  },
  {
    label: "Total Credits",
    value: "14",
    subtext: "This semester",
    icon: <BarChart3 className="text-green-500" />,
    bg: "bg-white",
  },
];

const COURSE_PROGRESS = [
  {
    title: "Introduction to Programming",
    code: "CS101",
    instructor: "Dr. Smith",
    schedule: "MWF 9:00-10:00 AM",
    room: "Room 201",
    credits: "3 CR",
    grade: "A",
    attendance: 93.3,
    details: "28 of 30 classes attended",
    color: "bg-lime-500",
  },
  {
    title: "Calculus II",
    code: "MATH201",
    instructor: "Dr. Johnson",
    schedule: "TTH 11:00-12:30 PM",
    room: "Room 305",
    credits: "4 CR",
    grade: "B+",
    attendance: 89.2, // Visual estimate from cyan bar
    details: "25 of 28 classes attended",
    color: "bg-cyan-400",
  },
  {
    title: "English Composition",
    code: "ENG102",
    instructor: "Prof. Williams",
    schedule: "MWF 2:00-3:00 PM",
    room: "Room 110",
    credits: "3 CR",
    grade: "A-",
    attendance: 90.0,
    details: "27 of 30 classes attended",
    color: "bg-lime-500",
  },
  {
    title: "Physics I",
    code: "PHY150",
    instructor: "Dr. Brown",
    schedule: "MWF 2:00-3:00 PM",
    room: "Room 120",
    credits: "4 CR",
    grade: "A-",
    attendance: 92.9,
    details: "26 of 28 classes attended",
    color: "bg-lime-500",
  },
];

const MyCoursesPage = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 text-slate-800">
      {/* Page Title Card */}
      <div className="bg-white rounded-[20px] border border-slate-100 shadow-sm p-6 flex items-center gap-4">
        <div className="p-3 bg-sky-50 rounded-xl text-sky-500">
          <School size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>
          <p className="text-slate-500 text-sm font-medium">
            Current semester overview
          </p>
        </div>
      </div>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUMMARY_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              <span className="text-3xl font-black text-slate-900">
                {stat.value}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{stat.label}</p>
              <p className="text-[11px] text-slate-400 font-medium">
                {stat.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Class Schedule / Progress Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={18} className="text-[#4db8d8]" />
          <h2 className="text-lg font-bold text-slate-900">Class Schedule</h2>
        </div>

        {COURSE_PROGRESS.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 relative group overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Course Info */}
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900">
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400">
                    {course.code} • {course.instructor}
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-300" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-slate-300" />
                    <span>{course.room}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 uppercase text-[10px] font-bold">
                      Grade:
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-black ${
                        course.grade.startsWith("A") ?
                          "bg-green-50 text-green-600"
                        : "bg-sky-50 text-sky-600"
                      }`}
                    >
                      {course.grade}
                    </span>
                  </div>
                </div>
              </div>

              {/* Credit Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-sky-50 text-[#4db8d8] px-4 py-1.5 rounded-xl text-xs font-black tracking-widest">
                  {course.credits}
                </span>
              </div>
            </div>

            {/* Attendance Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-[11px] font-bold text-slate-900">
                    Attendance
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {course.details}
                  </p>
                </div>
                <span className="text-[13px] font-black text-slate-800">
                  {course.attendance}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${course.color}`}
                  style={{ width: `${course.attendance}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Performance Table */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 space-y-6">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-lime-500" />
          <h2 className="text-lg font-bold text-slate-900">
            Academic Performance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Course
                </th>
                <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  Credits
                </th>
                <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  Grade
                </th>
                <th className="pb-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                {
                  name: "Introduction to Programming",
                  cr: 3,
                  gr: "A",
                  pt: "4.0",
                },
                { name: "Calculus II", cr: 4, gr: "B+", pt: "3.3" },
                { name: "English Composition", cr: 3, gr: "A-", pt: "3.7" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-50 last:border-0">
                  <td className="py-4 font-bold text-slate-800">{row.name}</td>
                  <td className="py-4 text-center font-medium text-slate-600">
                    {row.cr}
                  </td>
                  <td className="py-4 text-center">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        row.gr.startsWith("A") ?
                          "bg-green-50 text-green-600"
                        : "bg-sky-50 text-sky-600"
                      }`}
                    >
                      {row.gr}
                    </span>
                  </td>
                  <td className="py-4 text-center font-bold text-slate-800">
                    {row.pt}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50/50">
                <td className="py-4 px-4 font-black text-slate-900 rounded-l-xl">
                  Total / Average
                </td>
                <td className="py-4 text-center font-black text-slate-900">
                  10
                </td>
                <td className="py-4 text-center">
                  <span className="bg-lime-50 text-lime-600 px-3 py-1 rounded-md text-[10px] font-black">
                    GPA: 3.63
                  </span>
                </td>
                <td className="py-4 px-4 text-center font-black text-slate-900 rounded-r-xl">
                  3.63
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesPage;
