import Sidebar from "../components/dashboard/SideBar";
import TopBar from "../components/dashboard/TopBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Fixed Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 bg-white">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col">
        <TopBar />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
