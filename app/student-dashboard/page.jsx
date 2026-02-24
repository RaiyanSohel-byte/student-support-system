import { BookOpen, GraduationCap, Activity, Ticket } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import ScheduleCard from "../components/dashboard/ScheduleCard";
export default function StudentDashboardPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      {/* Welcome Header */}
      <header className="flex justify-between items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Welcome back, John 👋
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Thursday, January 22, 2026
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Student ID
          </p>
          <p className="text-xl font-bold text-[#4db8d8]">STU001</p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Enrolled Courses"
          value="4"
          subtext="This semester"
          icon={<BookOpen className="text-sky-400" />}
          valueColor="text-sky-500"
        />
        <StatCard
          title="Current GPA"
          value="3.63"
          subtext="Based on 3 courses"
          icon={<GraduationCap className="text-[#A9CE40]" />}
          valueColor="text-[#A9CE40]"
        />
        <StatCard
          title="Attendance Rate"
          value="91.4%"
          subtext="Average across courses"
          icon={<Activity className="text-[#48A548]" />}
          valueColor="text-[#48A548]"
        />
        <StatCard
          title="Open Tickets"
          value="0"
          subtext="1 total tickets"
          icon={<Ticket className="text-[#A9CE40]" />}
          valueColor="text-[#A9CE40]"
        />
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Schedule - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-blue-500 rounded-lg">
                📅
              </span>{" "}
              Today's Schedule
            </h2>
            <div className="space-y-4">
              {/* Map your schedule data here */}
              <ScheduleCard
                time="9:00-10:00"
                title="Introduction to Programming"
                code="CS101"
                prof="Dr. Smith"
                room="201"
                credits="3"
                color="blue"
              />
              <ScheduleCard
                time="11:00-12:30"
                title="Calculus II"
                code="MATH201"
                prof="Dr. Johnson"
                room="305"
                credits="4"
                color="green"
              />
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
              <span className="text-green-500 italic">📈</span> Academic
              Progress
            </h2>
            {/* Progress Items */}
          </section>
        </div>

        {/* Sidebar Widgets - Takes up 1 column */}
        <div className="space-y-6">
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 min-h-[400px]">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-green-50 text-green-500 rounded-lg">
                🕒
              </span>{" "}
              Recent Activity
            </h2>
            {/* Activity Feed */}
          </section>

          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                ⚠️
              </span>{" "}
              Support Tickets
            </h2>
            {/* Ticket items */}
          </section>
        </div>
      </div>
    </div>
  );
}
