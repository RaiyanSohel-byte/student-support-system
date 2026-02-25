"use client";
import React, { useState } from "react";
import { BookOpen, Search, Eye, ThumbsUp } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "All Articles",
  "Account & Login",
  "Academic",
  "Registration",
  "Financial",
  "Campus Services",
];

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

const KnowledgeBasePage = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles =
    activeCategory === "All Articles" ? ARTICLES : (
      ARTICLES.filter((art) => art.category === activeCategory)
    );

  return (
    <div className="p-4 md:p-8 space-y-8 text-slate-800">
      {/* Header & Search Section */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8 md:p-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-sky-50 rounded-xl text-[#4db8d8]">
            <BookOpen size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Knowledge Base
            </h1>
            <p className="text-slate-500 font-medium">
              Find answers to common questions
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-sky-50 focus:border-[#4db8d8] transition-all text-sm font-medium"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-2.5 rounded-xl text-sm font-bold border-2 transition-all duration-200
              ${
                activeCategory === cat ?
                  "bg-[#4db8d8] border-[#4db8d8] text-white shadow-lg shadow-sky-100"
                : "bg-white border-green-600 text-green-600 hover:bg-green-50"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, idx) => (
          <Link href={`/dashboard/knowledge-base/${article.id} `} key={idx}>
            {" "}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between group cursor-pointer">
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#4db8d8] transition-colors">
                  {article.title}
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-sky-50 text-[#4db8d8] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                    {article.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Eye size={14} />
                    <span className="text-[11px] font-bold tracking-tight">
                      {article.views}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-lime-500">
                    <ThumbsUp size={14} />
                    <span className="text-[11px] font-bold tracking-tight">
                      {article.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
