"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Search,
  Check,
  MoreVertical,
  UserCircle,
  FileText,
  X,
  BookOpen,
  Plus,
  Edit2,
  Calendar,
  Award,
  Filter,
} from "lucide-react";

// Updated Mock Data
const MOCK_USERS = [
  {
    id: 1,
    name: "John Student",
    email: "student@university.edu",
    role: "Student",
    department: "Computer Science",
    studentId: "STU001",
    phone: "+1-555-0101",
    status: "Active",
  },
  {
    id: 2,
    name: "Dr. Jacob Smith",
    email: "j.smith@university.edu",
    role: "Faculty",
    department: "Engineering",
    studentId: "FAC002",
    phone: "+1-555-0102",
    status: "Active",
  },
  {
    id: 3,
    name: "Prof. Emily White",
    email: "e.white@university.edu",
    role: "Faculty",
    department: "Mathematics",
    studentId: "FAC003",
    phone: "+1-555-0103",
    status: "Active",
  },
  {
    id: 4,
    name: "Admin Sarah",
    email: "sarah.admin@university.edu",
    role: "Admin",
    department: "Operations",
    studentId: "ADM004",
    phone: "+1-555-0104",
    status: "Active",
  },
  {
    id: 5,
    name: "Support Mark",
    email: "mark.it@university.edu",
    role: "Support",
    department: "IT Helpdesk",
    studentId: "SUP005",
    phone: "+1-555-0105",
    status: "Active",
  },
];

const UserManagementAdmin = () => {
  const [activeTab, setActiveTab] = useState("Students");
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (type, user) => {
    setSelectedUser(user);
    setActiveModal(type);
    setOpenDropdownId(null);
  };

  const getCount = (role) =>
    MOCK_USERS.filter((u) =>
      Array.isArray(role) ? role.includes(u.role) : u.role === role,
    ).length;

  const filteredUsers = MOCK_USERS.filter((user) => {
    const tabConfig = {
      Students: "Student",
      Faculty: ["Faculty", "Admin"],
      Support: "Support",
    };
    const matchesTab =
      Array.isArray(tabConfig[activeTab]) ?
        tabConfig[activeTab].includes(user.role)
      : user.role === tabConfig[activeTab];

    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.studentId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-screen text-slate-800">
      {/* --- HEADER --- */}
      <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-sky-50 rounded-2xl">
            <Users className="w-8 h-8 text-sky-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-0.5">
              User Management
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Manage system users, roles, and permissions
            </p>
          </div>
        </div>
        <button className="bg-[#A3D139] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-lime-100">
          <Plus size={18} /> Add User
        </button>
      </div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[24px] border border-slate-200 shadow-sm">
        <div className="relative w-full md:max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, ID, or department..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative group">
            <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Filter size={18} className="text-slate-400" />
              Filter by Role
            </button>
          </div>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-visible">
        <div className="flex border-b border-slate-200 px-6 pt-2">
          {["Students", "Faculty", "Support"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-sm font-bold transition-all border-b-2 mb-[-2px] ${
                activeTab === tab ?
                  "border-sky-400 text-sky-500"
                : "border-transparent text-slate-400"
              }`}
            >
              {tab} (
              {getCount(
                tab === "Faculty" ? ["Faculty", "Admin"]
                : tab === "Students" ? "Student"
                : "Support",
              )}
              )
            </button>
          ))}
        </div>

        <div className="p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 text-slate-400 text-[11px] uppercase tracking-[0.1em]">
                <th className="pb-4 font-black">User Details</th>
                <th className="pb-4 font-black">Role</th>
                <th className="pb-4 font-black">Department</th>
                <th className="pb-4 font-black">Status</th>
                <th className="pb-4 font-black text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                >
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-none mb-1">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-400 font-medium">
                          {user.studentId}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-lg text-[10px] font-black uppercase tracking-tight">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-5 text-sm font-semibold text-slate-600">
                    {user.department}
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-1 text-[11px] font-black text-green-500 uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </div>
                  </td>
                  <td className="py-5 text-center relative">
                    <button
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === user.id ? null : user.id,
                        )
                      }
                      className="text-slate-500 cursor-pointer hover:text-slate-600 p-2 transition-colors"
                    >
                      <MoreVertical size={20} />
                    </button>
                    {openDropdownId === user.id && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 py-2 animate-in fade-in zoom-in duration-150"
                      >
                        <button
                          onClick={() => handleAction("details", user)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
                        >
                          <UserCircle size={18} className="text-slate-400" />{" "}
                          View Details
                        </button>
                        <button
                          onClick={() => handleAction("academic", user)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 border-t border-slate-50"
                        >
                          <FileText size={18} className="text-slate-400" />{" "}
                          Academic Records
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold">
                No users found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- MODAL RENDERING --- */}
      {activeModal === "details" && (
        <DetailsModal
          user={selectedUser}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "academic" && (
        <AcademicModal
          user={selectedUser}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

// --- MODAL WRAPPER ---
const ModalWrapper = ({ title, icon: Icon, children, onClose, footer }) => (
  <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
    <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in duration-200">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-white sticky top-0">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-50 rounded-xl text-sky-500">
            <Icon size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{title}</h2>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
              Management Control
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-8 overflow-y-auto bg-white">{children}</div>
      {footer && (
        <div className="p-6 border-t border-slate-200 flex gap-3 justify-end bg-slate-50/50">
          {footer}
        </div>
      )}
    </div>
  </div>
);

const DetailsModal = ({ user, onClose }) => (
  <ModalWrapper
    title="User Details"
    icon={UserCircle}
    onClose={onClose}
    footer={
      <button
        onClick={onClose}
        className="w-full py-3.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all"
      >
        Close
      </button>
    }
  >
    <div className="grid grid-cols-2 gap-8">
      {[
        { label: "Name", val: user.name },
        { label: "Email", val: user.email },
        { label: "Role", val: user.role, badge: true },
        { label: "Department", val: user.department },
        { label: "Student ID", val: user.studentId },
        { label: "Phone", val: user.phone },
      ].map((item, i) => (
        <div key={i}>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
            {item.label}
          </p>
          {item.badge ?
            <span className="px-2.5 py-1 bg-cyan-50 text-cyan-600 rounded-lg text-xs font-black uppercase">
              {item.val}
            </span>
          : <p className="font-bold text-slate-800">{item.val}</p>}
        </div>
      ))}
    </div>
  </ModalWrapper>
);

const AcademicModal = ({ user, onClose }) => {
  const courses = [
    {
      id: "CS101",
      name: "Introduction to Programming",
      instructor: "Dr. Smith",
      schedule: "MWF 9:00-10:00 AM",
      grade: "A",
      credits: 3,
    },
    {
      id: "MATH201",
      name: "Calculus II",
      instructor: "Dr. Johnson",
      schedule: "TTH 11:00-12:30 PM",
      grade: "B+",
      credits: 4,
    },
    {
      id: "ENG102",
      name: "English Composition",
      instructor: "Prof. Williams",
      schedule: "MWF 2:00-3:00 PM",
      grade: "A-",
      credits: 3,
    },
    {
      id: "PHY150",
      name: "Physics I",
      instructor: "Dr. Brown",
      schedule: "TTH 1:00-2:30 PM",
      grade: "A-",
      credits: 4,
    },
  ];

  return (
    <ModalWrapper
      title="Academic Records & Control"
      icon={BookOpen}
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="px-10 py-3.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
          <button className="px-10 py-3.5 bg-[#A3D139] text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md shadow-lime-100">
            Save Changes
          </button>
        </>
      }
    >
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              label: "Student ID",
              val: user.studentId,
              color: "text-slate-900",
            },
            {
              label: "Department",
              val: user.department,
              color: "text-slate-900",
            },
            { label: "Status", val: "Active", color: "text-green-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-200"
            >
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className={`font-bold ${stat.color} text-base`}>{stat.val}</p>
            </div>
          ))}
        </div>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-sky-500" />
            <h3 className="font-bold text-slate-800">Course Assignments</h3>
          </div>
          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-4 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-sky-100 transition-colors bg-white"
              >
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    {course.id} - {course.name}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {course.instructor} • {course.schedule}
                  </p>
                </div>
                <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tight">
                  Enrolled
                </span>
              </div>
            ))}
            <button className="w-full py-4 mt-2 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all">
              <Plus size={16} /> Add Course
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={18} className="text-green-500" />
            <h3 className="font-bold text-slate-800">Class Schedule Summary</h3>
          </div>
          <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl text-sm text-slate-600 leading-relaxed font-medium italic">
            "MWF 9:00-10:00 AM, TTH 11:00-12:30 PM, MWF 2:00-3:00 PM"
            <p className="mt-4 text-[10px] text-slate-400 not-italic font-black uppercase tracking-widest">
              Syncing with Canvas LMS...
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-orange-500" />
            <h3 className="font-bold text-slate-800">Grades & Performance</h3>
          </div>
          <div className="space-y-3">
            {courses.slice(0, 2).map((course) => (
              <div
                key={course.id + "-grade"}
                className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    {course.name}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {course.credits} Credits
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase">
                      Grade
                    </span>
                    <span className="text-lg font-black text-sky-500">
                      {course.grade}
                    </span>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-sky-500 transition-colors">
                    <Edit2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Current GPA
              </label>
              <input
                type="text"
                defaultValue="3.45"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-sky-100 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Total Credits
              </label>
              <input
                type="text"
                defaultValue="14"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-sky-100 transition-all"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
            <p className="text-[10px] text-amber-700 font-medium leading-relaxed">
              <span className="font-black uppercase mr-2">
                Manual Override:
              </span>
              Changes made here will override LMS data. All updates are
              version-controlled and traceable to your admin account.
            </p>
          </div>
        </section>
      </div>
    </ModalWrapper>
  );
};

export default UserManagementAdmin;
