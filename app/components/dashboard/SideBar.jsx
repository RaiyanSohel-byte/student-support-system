"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Ticket,
  Send,
  BookOpen,
  CalendarCheck,
  GraduationCap,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";
const NAV_ITEMS = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/student-dashboard" },
  { name: "My Tickets", icon: Ticket, href: "/student-dashboard/my-tickets" },
  {
    name: "Submit Ticket",
    icon: Send,
    href: "/student-dashboard/submit-ticket",
  },
  {
    name: "Knowledge Base",
    icon: BookOpen,
    href: "/student-dashboard/knowledge-base",
  },
  {
    name: "My Attendance Report",
    icon: CalendarCheck,
    href: "/student-dashboard/my-attendance-report",
  },
  { name: "My AOLCC", icon: Briefcase, href: "/student-dashboard/my-alocc" },
  {
    name: "My Course Progress",
    icon: GraduationCap,
    href: "/student-dashboard/my-course-progress",
  },
  {
    name: "Messages",
    icon: MessageSquare,
    href: "/student-dashboard/messages",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full py-6">
      {/* Brand Logo */}
      <div className="px-6 mb-10">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="SIS Logo" height={64} width={177} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive ?
                  "bg-[#4db8d8] text-white shadow-md shadow-sky-100"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
