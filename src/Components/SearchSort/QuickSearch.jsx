import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchPartner = () => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/findPartners?subject=${subject}`);
  };

  return (
    <div>
      <section className="py-12dark:from-gray-800 dark:to-gray-900 mt-[80px]">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h3 className="mb-6 text-2xl font-bold light:text dark:text">
            Find Your Partner in Seconds
          </h3>
          <div className="flex flex-col mx-auto lg:max-w-lg sm:flex-row">
            <input
              type="text"
              placeholder="Physics, Maths, English... etc."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 input input-lg"
            />
            <button
              onClick={handleSearch}
              className="btn btn-lg bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold"
            >
              Search Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPartner;
