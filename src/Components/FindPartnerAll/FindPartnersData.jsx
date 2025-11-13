import { use, useState } from "react";
import FindPartner from "./FindPartner";
import { FaUserGraduate } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner";

const FindPartnersData = ({ findPartnerPromise }) => {
  const partners = use(findPartnerPromise);

  const [sortOrder, setSortOrder] = useState(""); // "advanced", "intermediate", "beginner"
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value.toLowerCase());
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Define order priority
  const levelOrder = {
    advanced: 3,
    intermediate: 2,
    beginner: 1,
  };

  // Filter & Sort Logic
  const filteredAndSortedPartners = partners
    .filter((partner) => {
      const search = searchTerm.toLowerCase();
      return (
        partner.name.toLowerCase().includes(search) ||
        partner.subject.toLowerCase().includes(search) ||
        partner.experienceLevel.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      const levelA = levelOrder[a.experienceLevel.toLowerCase()] || 0;
      const levelB = levelOrder[b.experienceLevel.toLowerCase()] || 0;

      if (sortOrder === "advanced") return levelB - levelA; // Advanced first
      if (sortOrder === "intermediate") {
        // Intermediate first, then Advanced, then Beginner
        if (levelA === 2 && levelB !== 2) return -1;
        if (levelB === 2 && levelA !== 2) return 1;
        return levelB - levelA;
      }
      if (sortOrder === "beginner") return levelA - levelB; // Beginner first
      return 0;
    });

  setTimeout(() => setLoading(false), 2000);

  if (loading) {
    return <LoadingSpinner center message="Finding partners..." />;
  }

  return (
    <div className="my-[80px]">
      <h2 className="flex justify-center items-center gap-3 text-[26px] font-semibold dark:light dark:text mb-[80px]">
        Find Study Partner{" "}
        <FaUserGraduate className="text-yellow-500 text-[40px]" />
      </h2>

      {/* Search & Sort Section */}
      <div className="flex flex-col items-center justify-between gap-4 mb-6 sm:flex-row">
        {/* Search Input */}
        <label className="flex items-center w-full gap-2 input input-bordered sm:max-w-xs">
          <svg
            className="w-5 h-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search partner..."
            className="grow"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </label>

        {/* Sort by experienceLevel */}
        <div className="w-full sm:max-w-xs">
          <input
            type="text"
            className="w-full input input-bordered"
            placeholder="Sort by Experience"
            list="experience"
            onChange={handleSortChange}
            value={
              sortOrder === "advanced"
                ? "Advanced"
                : sortOrder === "intermediate"
                ? "Intermediate"
                : sortOrder === "beginner"
                ? "Beginner"
                : ""
            }
          />
          <datalist id="experience">
            <option value="Advanced" />
            <option value="Intermediate" />
            <option value="Beginner" />
          </datalist>
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
