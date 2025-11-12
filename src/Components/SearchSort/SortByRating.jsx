import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SortByRating = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:3000/find-partners")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  // Sort partners based on rating
  const sortedPartners = [...partners].sort((a, b) => {
    if (sortOrder === "high") {
      return b.rating - a.rating; 
    } else if (sortOrder === "low") {
      return a.rating - b.rating;
    }
    return 0; // No sort
  });

  // Handle sort change
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "High Rating") {
      setSortOrder("high");
    } else if (value === "Low Rating") {
      setSortOrder("low");
    } else {
      setSortOrder("");
    }
  };

  if (loading) return <p className="py-10 text-center">Loading partners...</p>;

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#001F46]">
        Find Study Partner
      </h1>

      {/* Sort Dropdown */}
      <div className="max-w-xs mx-auto mb-8">
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

      {/* Partners Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedPartners.map((partner) => (
          <div
            key={partner._id}
            className="flex flex-col h-full overflow-hidden transition-all duration-300 border border-yellow-200 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-2xl"
            style={{ minHeight: "380px" }}
          >
            {/* Image */}
            <div className="flex justify-center p-6">
              <img
                src={partner.profileimage}
                alt={partner.name}
                className="object-cover border-4 border-yellow-400 rounded-full shadow-md w-28 h-28"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow px-6 pb-4">
              <h3 className="text-xl font-bold text-[#001F46] text-center mb-2 line-clamp-1">
                {partner.name}
              </h3>

              <div className="space-y-1 text-sm text-gray-700">
                <p className="flex justify-between">
                  <span className="font-medium">Subject:</span>
                  <span className="text-right max-w-[60%] truncate">
                    {partner.subject}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Skill:</span>
                  <span className="font-semibold text-yellow-600">
                    {partner.experienceLevel}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Ratings:</span>
                  <span className="font-bold text-green-600">
                    ⭐ {partner.rating}
                  </span>
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="px-6 pb-6 mt-auto">
              <Link
                to={`/partnerDetails/${partner._id}?from=findPartners`}
                className="block w-full text-center btn bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortByRating;