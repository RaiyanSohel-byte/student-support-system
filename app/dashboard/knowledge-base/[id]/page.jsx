"use client";
import React from "react";
import { ArrowLeft, Eye, ThumbsUp, ThumbsDown, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data storage (In a real app, this would be a fetch/DB call)
const ARTICLES = [
  {
    id: 1,
    title: "How to Reset Your Password",
    category: "Account & Login",
    views: 1250,
    rating: "96%",
    tags: ["password", "reset", "login"],
  },
  {
    id: 2,
    title: "Canvas LMS Access Guide",
    category: "Academic",
    views: 2100,
    rating: "98%",
    tags: ["canvas", "lms", "courses"],
  },
  {
    id: 3,
    title: "How to Register for Classes",
    category: "Registration",
    views: 3500,
    rating: "95%",
    tags: ["registration", "classes", "courses"],
  },
  {
    id: 4,
    title: "Financial Aid Application Process",
    category: "Financial",
    views: 1800,
    rating: "95%",
    tags: ["financial aid", "fafsa", "scholarships"],
  },
  {
    id: 5,
    title: "Library Hours and Resources",
    category: "Campus Services",
    views: 950,
    rating: "97%",
    tags: ["library", "hours", "resources"],
  },
];
const KnowledgeBaseDetailPage = () => {
  const { id } = useParams();

  // Find the specific article based on the URL ID
  const article = ARTICLES.find((art) => art.id === Number(id)) || ARTICLES[0];

  return (
    <div className="p-4 md:p-8 space-y-6 text-slate-800">
      {/* Back Button */}
      <Link
        href="/dashboard/knowledge-base"
        className="flex items-center gap-2 text-slate-500 hover:text-[#4db8d8] transition-colors group mb-4"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm font-bold">Back to Knowledge Base</span>
      </Link>

      {/* Article Main Card */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 md:p-12 space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-cyan-50 text-cyan-500 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              {article.category}
            </span>
            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              {article.department}
            </span>

            <div className="flex items-center gap-1.5 text-slate-400 ml-2">
              <Eye size={16} />
              <span className="text-xs font-bold">{article.views} views</span>
            </div>

            <div className="flex items-center gap-1.5 text-lime-500">
              <ThumbsUp size={16} />
              <span className="text-xs font-bold">
                {article.rating} helpful
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-8">
          {article.content}
        </div>

        {/* Feedback Section - Specific to the Mockup */}
        <div className="bg-slate-50/50 rounded-[20px] p-6 md:p-8 space-y-6">
          <h3 className="text-sm font-bold text-slate-900">
            Was this article helpful?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-6 bg-white border border-lime-500 text-lime-600 rounded-xl font-bold text-sm hover:bg-lime-50 transition-all">
              <ThumbsUp size={18} />
              Yes ({article.yesCount})
            </button>

            <button className="flex items-center justify-center gap-2 py-3 px-6 bg-white border border-orange-500 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all">
              <ThumbsDown size={18} />
              No ({article.noCount})
            </button>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="pt-4 flex items-center gap-2 text-slate-400 text-[11px] font-medium">
          <Calendar size={14} />
          <span>
            Created by {article.author} on {article.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseDetailPage;
