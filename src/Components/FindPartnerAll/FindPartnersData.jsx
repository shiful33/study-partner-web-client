import { use, useState } from "react";
import FindPartner from "./FindPartner";
import { FaUserGraduate } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner";

const FindPartnersData = ({ findPartnerPromise }) => {
  const partners = use(findPartnerPromise);

  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "High Rating") setSortOrder("high");
    else if (value === "Low Rating") setSortOrder("low");
    else setSortOrder("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
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
      if (sortOrder === "high") return b.rating - a.rating;
      if (sortOrder === "low") return a.rating - b.rating;
      return 0;
    });

    setTimeout(() => setLoading(false), 2000);

  if (loading) {
    return <LoadingSpinner center message="Finding partners..." />;
  }


  return (
    
    <div className="my-[80px]">
      <h2 className="flex justify-center items-center gap-3 text-[26px] font-semibold text-shadow-light text-[#001F46] mb-[80px]">
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

        {/* Sort by Rating */}
        <div className="w-full sm:max-w-xs">
          <input
            type="text"
            className="w-full input input-bordered"
            placeholder="Sort by Rating"
            list="rating"
            onChange={handleSortChange}
            value={
              sortOrder === "high"
                ? "High Rating"
                : sortOrder === "low"
                ? "Low Rating"
                : ""
            }
          />
          <datalist id="rating">
            <option value="High Rating" />
            <option value="Low Rating" />
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
