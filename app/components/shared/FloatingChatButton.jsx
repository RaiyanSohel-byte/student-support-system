import { Sparkles } from "lucide-react";
import React from "react";

const FloatingChatButton = () => {
  return (
    <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full shadow-lg shadow-sky-200 flex items-center justify-center text-white hover:scale-110 transition-transform z-50">
      <Sparkles size={28} />
    </button>
  );
};

export default FloatingChatButton;
