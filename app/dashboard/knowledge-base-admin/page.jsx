"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  FileText,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Tag,
  Plus,
  TrendingUp,
  Check,
} from "lucide-react";

// Mock data based on your design
const ARTICLES_DATA = [
  {
    id: 1,
    title: "How to Reset Your Password",
    category: "Account & Login",
    status: "Published",
    desc: 'To reset your password: 1) Go to login page, 2) Click "Forgot Password", 3) Enter your email, 4) Check your email for reset link, 5) Create a new password.',
    department: "IT Support",
    views: "1,250",
    helpful: "320",
    notHelpful: "15",
    rating: "96%",
    createdBy: "System Admin",
    createdDate: "15/01/2024",
    updatedDate: "15/01/2024",
    publishedBy: "System Admin",
    publishedDate: "15/01/2024",
  },
  {
    id: 2,
    title: "Canvas LMS Access Guide",
    category: "Academic",
    status: "Published",
    desc: "Access Canvas at canvas.university.edu using your university credentials. All course materials, assignments, and grades are available through Canvas.",
    department: "Academic Affairs",
    views: "2,100",
    helpful: "450",
    notHelpful: "8",
    rating: "98%",
    createdBy: "Faculty Admin",
    createdDate: "10/01/2024",
    updatedDate: "10/01/2024",
    publishedBy: "Faculty Admin",
    publishedDate: "10/01/2024",
  },
  {
    id: 3,
    title: "How to Register for Classes",
    category: "Registration",
    status: "Published",
    desc: "Class registration opens during designated periods. Log into the Student Portal, navigate to Registration, search for courses, and add them to your schedule. Ensure prerequisites are met.",
    department: "Registrar",
    views: "3,500",
    helpful: "890",
    notHelpful: "45",
    rating: "95%",
    createdBy: "Registrar Office",
    createdDate: "05/01/2024",
    updatedDate: "05/01/2024",
    publishedBy: "Registrar Office",
    publishedDate: "05/01/2024",
  },
];

const DEPARTMENTS = [
  "All Departments",
  "IT Support",
  "Academic Affairs",
  "Registrar",
];

const KnowledgeBaseAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter Logic
  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept =
      selectedDept === "All Departments" || article.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen text-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">
            Knowledge Base Management
          </h1>
          <p className="text-slate-500">Create and manage help articles</p>
        </div>
        <button className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm">
          <Plus size={20} /> Create Article
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Total Articles
            </p>
            <h2 className="text-3xl font-black text-slate-900">5</h2>
          </div>
          <FileText className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Total Views
            </p>
            <h2 className="text-3xl font-black text-slate-900">9,600</h2>
          </div>
          <Eye className="w-8 h-8 text-green-500" strokeWidth={1.5} />
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Helpful Ratings
            </p>
            <h2 className="text-3xl font-black text-slate-900">2255</h2>
          </div>
          <ThumbsUp className="w-8 h-8 text-lime-500" strokeWidth={1.5} />
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Categories
            </p>
            <h2 className="text-3xl font-black text-slate-900">5</h2>
          </div>
          <Tag className="w-8 h-8 text-orange-400" strokeWidth={1.5} />
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-sky-100 transition-all text-sm"
          />
        </div>

        {/* Custom Dropdown */}
        <div className="relative w-full md:w-64" ref={dropdownRef}>
          <button
            onClick={() => setIsDeptOpen(!isDeptOpen)}
            className="w-full flex items-center justify-between px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all bg-white"
          >
            <span
              className={
                selectedDept === "All Departments" ? "text-slate-400" : (
                  "text-slate-700 font-bold"
                )
              }
            >
              {selectedDept === "All Departments" ?
                "Select Department"
              : selectedDept}
            </span>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform ${isDeptOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDeptOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white border border-slate-100 rounded-[20px] shadow-xl z-50 p-2 space-y-1">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => {
                    setSelectedDept(dept);
                    setIsDeptOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all flex items-center justify-between ${
                    selectedDept === dept ?
                      "bg-sky-50 text-sky-600 font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {dept}
                  {selectedDept === dept && (
                    <Check size={16} className="text-sky-500" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {filteredArticles.length > 0 ?
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {article.title}
                </h3>
                <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold">
                  {article.category}
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold flex items-center gap-1">
                  <Check size={12} strokeWidth={3} /> {article.status}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {article.desc}
              </p>

              {/* Data Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Department:</p>
                  <p className="text-sm font-bold text-slate-900">
                    {article.department}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Views:</p>
                  <p className="text-sm font-bold text-slate-900">
                    {article.views}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Helpful:</p>
                  <p className="text-sm font-bold text-lime-600 flex items-center gap-1">
                    <ThumbsUp size={14} /> {article.helpful}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Not Helpful:</p>
                  <p className="text-sm font-bold text-slate-500 flex items-center gap-1">
                    <ThumbsDown size={14} /> {article.notHelpful}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Rating:</p>
                  <p className="text-sm font-bold text-green-600 flex items-center gap-1">
                    <TrendingUp size={14} /> {article.rating}
                  </p>
                </div>
              </div>

              {/* Footer text */}
              <div className="text-[11px] text-slate-400 space-y-1">
                <p>
                  <span className="font-bold">Created by </span>
                  {article.createdBy} on {article.createdDate} •{" "}
                  <span className="font-bold">Last updated: </span>
                  {article.updatedDate}
                </p>
                <p>
                  <span className="font-bold">Published by </span>
                  {article.publishedBy} on {article.publishedDate}
                </p>
              </div>
            </div>
          ))
        : <div className="text-center py-12 text-slate-400 italic">
            No articles found matching your criteria.
          </div>
        }
      </div>
    </div>
  );
};

export default KnowledgeBaseAdmin;
