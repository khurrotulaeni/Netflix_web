import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full px-4 py-4 flex items-center justify-between 
                   text-left hover:bg-zinc-800 transition"
      >
        <span className="text-base font-semibold text-white">
          {title}
        </span>

        <ChevronDown
          size={20}
          className={`text-red-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-gray-400 text-sm border-t border-zinc-800">
          {description}
        </div>
      )}
    </div>
  );
};