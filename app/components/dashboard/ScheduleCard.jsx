import React from "react";
import { Calendar } from "lucide-react";

const SCHEDULE_DATA = [
  {
    id: "1",
    time: "9:00-10:00",
    title: "Introduction to Programming",
    code: "CS101",
    professor: "Dr. Smith",
    room: "201",
    credits: 3,
  },
  {
    id: "2",
    time: "11:00-12:30",
    title: "Calculus II",
    code: "MATH201",
    professor: "Dr. Johnson",
    room: "305",
    credits: 4,
  },
  {
    id: "3",
    time: "2:00-3:00",
    title: "English Composition",
    code: "ENG102",
    professor: "Prof. Williams",
    room: "110",
    credits: 3,
  },
  {
    id: "4",
    time: "1:00-2:30",
    title: "Physics I",
    code: "PHY150",
    professor: "Dr. Brown",
    room: "402",
    credits: 4,
  },
];

export default function ScheduleCard() {
  return (
    <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 h-full">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-sky-50 rounded-lg">
          <Calendar className="w-5 h-5 text-[#4db8d8]" />
        </div>
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          Today's Schedule
        </h2>
      </div>

      {/* Schedule List */}
      <div className="space-y-3">
        {SCHEDULE_DATA.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function ScheduleItem({ item }) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-sky-100 hover:bg-white transition-all duration-200">
      <div className="flex items-center gap-6">
        {/* Time Slot */}
        <div className="w-24">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            Time
          </p>
          <p className="text-sm font-bold text-[#4db8d8] whitespace-nowrap">
            {item.time}
          </p>
        </div>

        {/* Course Info */}
        <div>
          <h3 className="text-[15px] font-bold text-slate-800 leading-tight">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs font-medium text-slate-500">
              {item.code} • {item.professor}
            </p>
            <span className="text-[10px] text-slate-300">•</span>
            <p className="text-xs font-medium text-slate-400">
              Room {item.room}
            </p>
          </div>
        </div>
      </div>

      {/* Credits Badge */}
      <div className="bg-[#ecf9f2] px-3 py-1.5 rounded-lg">
        <p className="text-[11px] font-bold text-[#47a477] whitespace-nowrap">
          {item.credits} Credits
        </p>
      </div>
    </div>
  );
}
