import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Sparkles } from "lucide-react";

const SearchPartner = () => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (subject.trim()) {
      navigate(`/findPartners?subject=${subject.trim()}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-16 mt-20 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          {/* Badge Style Heading */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
            <Sparkles size={16} />
            <span>Connect with experts globally</span>
          </div>

          <h3 className="mb-8 text-xl font-extrabold leading-tight md:text-3xl dark:text">
            Find Your Study Partner 
            <span className="text-yellow-500"> In Seconds</span>
          </h3>

          <div className="relative max-w-2xl mx-auto group">
            {/* Search Container with Glassmorphism Effect */}
            <div className="flex flex-col p-2 transition-all duration-300 bg-white border-2 border-gray-100 shadow-md rounded-2xl dark:bg-gray-800 dark:border-gray-700 sm:flex-row group-focus-within:border-yellow-400 group-focus-within:ring-4 group-focus-within:ring-yellow-400/10">
              <div className="flex items-center flex-1 px-4">
                <Search
                  className="text-gray-400 group-focus-within:text-yellow-500"
                  size={24}
                />
                <input
                  type="text"
                  placeholder="Physics, Maths, English... etc."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-2 text-[16px] placeholder-gray-400 bg-transparent border-none focus:ring-0 dark:text-white"
                />
              </div>

              <button
                onClick={handleSearch}
                className="px-8 py-2 text-lg font-bold transition-all duration-300 bg-yellow-400 rounded-xl text-[#001F46] hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-yellow-400/20 cursor-pointer"
              >
                Search Now
              </button>
            </div>

            {/* Subtle floating suggestions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["Math", "UI Design", "Physics", "History"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSubject(tag);
                    navigate(`/findPartners?subject=${tag}`);
                  }}
                  className="px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400 hover:bg-yellow-100 hover:text-yellow-600 dark:hover:bg-yellow-900/20 cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPartner;
