"use client";
import React, { useState } from "react";
import {
  GraduationCap,
  ClipboardList,
  Monitor,
  CircleDollarSign,
  Settings,
  Info,
  Send,
} from "lucide-react";

const CATEGORIES = [
  { id: "academic", name: "Academic", icon: GraduationCap },
  { id: "admissions", name: "Admissions", icon: ClipboardList },
  { id: "technical", name: "Technical", icon: Monitor },
  { id: "fao", name: "FAO", icon: CircleDollarSign },
  { id: "operations", name: "Operations", icon: Settings },
];

const SubmitTicketPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("academic");

  return (
    <div className="p-4 md:p-8">
      {/* Main Container Card */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 md:p-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Submit a Support Ticket
          </h1>
          <p className="text-slate-500 font-medium">
            Describe your issue and our team will assist you promptly.
          </p>
        </header>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Category Selection */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-slate-900 flex items-center gap-1">
              Category <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-200 gap-3
                      ${
                        isActive ?
                          "border-[#4db8d8] bg-[#f0f9fb] text-[#4db8d8] shadow-md shadow-sky-50"
                        : "border-slate-100 bg-white text-slate-800 hover:border-slate-200"
                      }
                    `}
                  >
                    <cat.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    <span
                      className={`text-sm font-bold tracking-tight ${isActive ? "text-[#4db8d8]" : "text-slate-900"}`}
                    >
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name of your issue"
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-4 focus:ring-sky-50 focus:border-[#4db8d8] transition-all text-sm placeholder:text-slate-300 font-medium"
            />
          </div>

          {/* Description Textarea */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Provide detailed information about your issue..."
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-sky-50 focus:border-[#4db8d8] transition-all text-sm placeholder:text-slate-300 font-medium resize-none"
            />
            <p className="text-[11px] text-slate-400 font-medium mt-1">
              Be as specific as possible to help us resolve your issue faster
            </p>
          </div>

          {/* AI Banner */}
          <div className="bg-[#f0f9fb] border border-[#e1f2f6] rounded-2xl p-6 flex items-start gap-4">
            <div className="p-1.5 bg-white rounded-full text-[#4db8d8] shadow-sm shrink-0">
              <Info size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#4db8d8]">
                AI-Powered Support
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Our AI will analyze your request and may provide an instant
                solution from our knowledge base. If additional help is needed,
                your ticket will be automatically routed to the appropriate
                department.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#b2e4f0] to-[#4db8d8] hover:to-[#3ca9c9] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-100 uppercase tracking-widest text-sm"
          >
            <Send size={18} className="rotate-0" />
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitTicketPage;
