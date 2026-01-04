import { use, useEffect, useState } from "react";
import FindPartner from "./FindPartner";
import { FaUserGraduate } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner";
import { Search, SortAsc, GraduationCap, Filter, X, Loader2 } from "lucide-react";

const FindPartnersData = ({ findPartnerPromise }) => {
  const partners = use(findPartnerPromise);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  /* const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value.toLowerCase());
  }; */

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const levelOrder = {
    advanced: 3,
    intermediate: 2,
    beginner: 1,
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  const clearSearch = () => setSearchTerm("");

  const filteredAndSortedPartners = partners
    .filter((partner) => {
      const search = searchTerm.toLowerCase();
      return (
        partner.name?.toLowerCase().includes(search) ||
        partner.subject?.toLowerCase().includes(search) ||
        partner.experienceLevel?.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      const levelA = levelOrder[a.experienceLevel?.toLowerCase()] || 0;
      const levelB = levelOrder[b.experienceLevel?.toLowerCase()] || 0;

      if (sortOrder === "advanced") return levelB - levelA;
      if (sortOrder === "beginner") return levelA - levelB;
      if (sortOrder === "intermediate") {
        if (levelA === 2 && levelB !== 2) return -1;
        if (levelB === 2 && levelA !== 2) return 1;
        return levelB - levelA;
      }
      return 0;
    });

  setTimeout(() => setLoading(false), 2000);

  if (loading) {
    return <LoadingSpinner center message="Finding partners..." />;
  }

  return (
    <div className="my-20">
      <h2 className="flex justify-center items-center gap-3 text-[26px] font-semibold dark:light dark:text mb-20">
        Find Study Partner{" "}
        <FaUserGraduate className="text-yellow-500 text-[40px] animate-pulse" />
      </h2>

      {/* Search & Filter Container */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-col items-center gap-4 p-3 bg-white border border-gray-100 shadow-xl md:flex-row dark:bg-gray-800 rounded-2xl dark:border-gray-700">
          {/* Enhanced Search Input */}
          <div className="relative flex-1 w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search
                className="text-gray-400 transition-colors group-focus-within:text-yellow-500"
                size={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search by name, subject, or level..."
              className="w-full pl-11 pr-10 py-3.5 bg-gray-50 dark:bg-gray-900/50 border-none rounded-xl focus:ring-2 focus:ring-yellow-400 dark:text-white transition-all outline-none"
              onChange={handleSearchChange}
              value={searchTerm}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Dynamic Sort Dropdown */}
          <div className="relative w-full md:w-64 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Filter
                className="text-gray-400 transition-colors group-focus-within:text-yellow-500"
                size={18}
              />
            </div>
            <select
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border-none rounded-xl focus:ring-2 focus:ring-yellow-400 dark:text-white appearance-none transition-all outline-none cursor-pointer font-medium"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value.toLowerCase())}
            >
              <option value="">Sort by Experience</option>
              <option value="beginner">Beginner First</option>
              <option value="intermediate">Intermediate Priority</option>
              <option value="advanced">Advanced (Experts)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
              <SortAsc size={16} />
            </div>
          </div>
        </div>

        {/* Search Results Count */}
        <div className="flex items-center justify-between px-2 mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-bold text-yellow-600 dark:text-yellow-500">
              {filteredAndSortedPartners.length}
            </span>{" "}
            partners
          </p>
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="text-xs font-semibold text-blue-500 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedPartners.length === 0 ? (
          <p className="py-10 text-center text-gray-500 col-span-full">
            No partners found.
          </p>
        ) : (
          filteredAndSortedPartners.map((partner) => (
            <FindPartner key={partner._id} partner={partner} />
          ))
        )}
      </div>
    </div>
  );
};

export default FindPartnersData;
