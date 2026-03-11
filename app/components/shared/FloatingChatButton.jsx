"use client";
import React, { useState } from "react";
import {
  Sparkles,
  X,
  Send,
  MessageCircle,
  Bot, // Matches the robot icon in your image
} from "lucide-react";

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const suggestions = [
    "How do I reset my password?",
    "How to access Canvas LMS?",
    "How do I register for classes?",
    "What are the library hours?",
    "How do I check my grades?",
  ];

  return (
    <>
      {/* 1. THE CHAT WINDOW */}
      {isOpen && (
        <div
          className={`
          fixed z-[60] flex flex-col overflow-hidden transition-all duration-300 shadow-2xl
          /* Mobile: Full screen */
          bottom-0 right-0 left-0 top-0 w-full h-full rounded-none
          /* Desktop: Floating window per image */
          md:bottom-32 md:right-6 md:left-auto md:top-auto md:w-[420px] md:h-[650px] md:rounded-[1.5rem]
          bg-[#CCEEF4] animate-in fade-in slide-in-from-bottom-5 border border-white/30
        `}
        >
          {/* Header - Specific Teal/Green Gradient from image */}
          <div className="bg-gradient-to-r from-[#4DB6AC] to-[#81C784] p-5 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Bot className="text-[#4DB6AC]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">
                  AI Assistant
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#AEEA00] rounded-full" />
                  <span className="text-xs font-medium opacity-90">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={26} strokeWidth={2.5} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center">
            {/* Center Icon */}
            <div className="w-20 h-20 bg-[#CCEEF4] rounded-full flex items-center justify-center mb-6 mt-4">
              <MessageCircle size={36} className="text-[#006064]" />
            </div>

            <h2 className="text-2xl font-black text-[#003d40] mb-1">
              Hi John!
            </h2>
            <p className="text-gray-500 font-medium mb-10 text-lg">
              How can I help you today?
            </p>

            {/* Suggestions List - Matching the "Pill" style in the image */}
            <div className="w-full space-y-3 px-2">
              {suggestions.map((text, i) => (
                <button
                  key={i}
                  className="w-full bg-[#EBFDFF] hover:bg-white text-[#006064] font-medium py-4 px-6 rounded-2xl border border-[#5AC7DB40] text-left transition-all hover:shadow-sm active:scale-[0.98] text-sm md:text-base"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          {/* Footer / Input Area */}
          <div className="p-4 bg-transparent shrink-0">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-[#EBFDFF] rounded-2xl border-2 border-[#101010] pl-5 pr-14 py-4 outline-none text-[#006064] placeholder:text-gray-400 font-medium shadow-inner"
              />
              <button className="absolute right-2 w-11 h-11 bg-[#4DD0E1] rounded-xl flex items-center justify-center text-white hover:bg-[#26C6DA] transition-colors shadow-md">
                <Send
                  size={20}
                  fill="currentColor"
                  className="rotate-[-10deg]"
                />
              </button>
            </div>
            <p className="text-[11px] text-center text-gray-700 mt-4 font-medium opacity-70">
              AI powered by knowledge base • Press Enter to send
            </p>
          </div>
        </div>
      )}

      {/* 2. THE FLOATING BUTTON (The Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed z-50 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg
          bottom-6 right-6 w-16 h-16
          md:bottom-10 md:right-10 
          ${
            isOpen ?
              "bg-red-500 rotate-90"
            : "bg-gradient-to-br from-sky-400 to-blue-500 hover:scale-110 shadow-sky-200"
          }
        `}
      >
        {isOpen ?
          <X size={28} />
        : <Sparkles size={28} />}
      </button>
    </>
  );
};

export default ChatAI;
