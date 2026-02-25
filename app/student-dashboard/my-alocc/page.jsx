"use client";
import React from "react";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  User,
  Calendar,
  ChevronRight,
  Info,
  Sparkles,
} from "lucide-react";

const SUMMARY_CARDS = [
  {
    label: "Active Courses",
    value: "4",
    subtext: "This semester",
    icon: <BookOpen size={22} className="text-[#4db8d8]" />,
    iconBg: "bg-sky-50",
  },
  {
    label: "Pending",
    value: "7",
    subtext: "Assignments",
    icon: <Clock size={22} className="text-orange-500" />,
    iconBg: "bg-orange-50",
  },
  {
    label: "Submitted",
    value: "35",
    subtext: "Completed",
    icon: <CheckCircle2 size={22} className="text-green-500" />,
    iconBg: "bg-green-50",
  },
  {
    label: "Avg Progress",
    value: "69%",
    subtext: "Course completion",
    icon: <TrendingUp size={22} className="text-lime-500" />,
    iconBg: "bg-lime-50",
  },
];

const COURSES = [
  {
    title: "Introduction to Programming",
    code: "CS101",
    grade: "A (92.5%)",
    gradeColor: "bg-green-100 text-green-700",
    instructor: "Dr. Smith",
    nextDate: "2/10/2026",
    progress: 68,
    progressColor: "bg-[#4db8d8]",
    tags: [
      { label: "2 Pending", type: "warning" },
      { label: "8 Submitted", type: "info" },
    ],
  },
  {
    title: "Calculus II",
    code: "MATH201",
    grade: "B+ (87.3%)",
    gradeColor: "bg-blue-100 text-blue-700",
    instructor: "Dr. Johnson",
    nextDate: "2/11/2026",
    progress: 72,
    progressColor: "bg-green-500",
    tags: [
      { label: "1 Pending", type: "warning" },
      { label: "10 Submitted", type: "info" },
      { label: "1 Overdue", type: "danger" },
    ],
  },
  {
    title: "English Composition",
    code: "ENG102",
    grade: "B (83.5%)",
    gradeColor: "bg-blue-100 text-blue-700",
    instructor: "Prof. Williams",
    nextDate: "2/10/2026",
    progress: 55,
    progressColor: "bg-[#4db8d8]",
    tags: [
      { label: "3 Pending", type: "warning" },
      { label: "5 Submitted", type: "info" },
    ],
  },
  {
    title: "Physics I",
    code: "PHY150",
    grade: "A- (90.2%)",
    gradeColor: "bg-green-100 text-green-700",
    instructor: "Dr. Brown",
    nextDate: "2/11/2026",
    progress: 80,
    progressColor: "bg-green-500",
    tags: [
      { label: "1 Pending", type: "warning" },
      { label: "12 Submitted", type: "info" },
    ],
  },
];

const MyAOLCCPage = () => {
  // Helper for dynamic tag styling
  const getTagStyle = (type) => {
    switch (type) {
      case "warning":
        return "bg-orange-50 text-orange-600";
      case "info":
        return "bg-blue-50 text-blue-600";
      case "danger":
        return "bg-red-50 text-red-600";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 text-slate-800 relative">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
          My AOLCC
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Learning Management System - Read Only View
        </p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SUMMARY_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-xl ${card.iconBg}`}>
                {card.icon}
              </div>
              <span className="text-2xl font-bold text-slate-900">
                {card.value}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{card.label}</p>
              <p className="text-[11px] text-slate-400 font-medium">
                {card.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Red Warning Alert */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
        <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-sm font-bold text-red-800">
            Overdue Assignments
          </h4>
          <p className="text-sm text-red-600">
            You have 1 overdue assignment. Please submit as soon as possible.
          </p>
        </div>
      </div>

      {/* Course Cards */}
      <div className="space-y-4">
        {COURSES.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            {/* Top Row: Title, Badges & Arrow */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[17px] font-bold text-slate-900">
                  {course.title}
                </h3>
                <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-widest">
                  {course.code}
                </span>
                <span
                  className={`px-2.5 py-1 rounded-md text-[11px] font-black ${course.gradeColor}`}
                >
                  {course.grade}
                </span>
              </div>
              <ChevronRight
                className="text-slate-300 group-hover:text-sky-400 transition-colors"
                size={20}
              />
            </div>

            {/* Middle Row: Meta Info */}
            <div className="flex items-center gap-6 text-[13px] text-slate-500 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-slate-400" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                <span>Next: {course.nextDate}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-2">
                <span>Course Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${course.progressColor}`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            {/* Bottom Row: Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
              {course.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold ${getTagStyle(tag.type)}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Blue Info Banner */}
      <div className="bg-[#f0f8ff] border border-blue-100 rounded-2xl p-5 flex items-start gap-3 mt-8">
        <Info className="text-blue-500 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-sm font-bold text-blue-900 mb-1">
            Read-Only View
          </h4>
          <p className="text-sm text-blue-700 leading-relaxed">
            This page displays synced data from Canvas LMS. To submit
            assignments, view full course materials, or interact with course
            content, please click "Open in Canvas LMS" above.
          </p>
        </div>
      </div>

      {/* Floating Sparkle Button (Optional as per exact image) */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full shadow-lg shadow-sky-200 flex items-center justify-center text-white hover:scale-110 transition-transform z-50">
        <Sparkles size={28} />
      </button>
    </div>
  );
};

export default MyAOLCCPage;
