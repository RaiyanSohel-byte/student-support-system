import { Bell, LogOut, Menu, User } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
export default function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 px-6 lg:px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Mobile Menu Trigger & Title */}
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-xl font-bold text-slate-800 hidden sm:block">
          Student Information System
        </h1>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-3 pr-6 border-r border-slate-100">
          <div className="relative text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800">John Student</p>
            <p className="text-xs text-slate-400">Student</p>
          </div>
          {/* Notification Badge */}
          <div className="relative">
            <IoIosNotificationsOutline size={28} color="#48A548" />{" "}
            <div className="absolute -top-1 left-3 w-5 h-5 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              1
            </div>
          </div>
          <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
            <User size={20} />
          </div>
        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-medium hidden lg:block">Logout</span>
        </button>
      </div>
    </header>
  );
}
