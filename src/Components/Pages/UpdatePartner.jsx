import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner";

const UpdatePartner = () => {
  const partner = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ...partner,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updateRes1 = await fetch("http://localhost:3000/update-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _id: partner._id }),
      });

      const updateRes2 = await fetch(
        `http://localhost:3000/update-myConnection/${partner._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!updateRes1.ok) {
        const error1 = await updateRes1.json();
        throw new Error(error1.message || "Failed to update findPartners");
      }

      if (!updateRes2.ok) {
        const error2 = await updateRes2.json();
        throw new Error(error2.message || "Failed to update myConnection");
      }

      toast.success("Profile Update Successful!");
      navigate("/myConnection");
    } catch (error) {
      toast.error("Update failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

 
 <LoadingSpinner center message="Loading Study Partner..." />
  

  return (
    <div className="my-[80px]">
      <div className="max-w-lg p-8 mx-auto bg-white border border-yellow-200 shadow-lg rounded-xl">
        <h1 className="text-[24px] font-bold text-center text-[#001F46] mb-6">
          Update Partner Details
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Profile Image URL */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Profile Image URL
            </label>
            <input
              type="url"
              name="profileimage"
              value={formData.profileimage}
              onChange={handleChange}
              className="w-full input input-bordered"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Study Mode */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Study Mode
            </label>
            <select
              name="studyMode"
              value={formData.studyMode}
              onChange={handleChange}
              className="w-full select select-bordered"
              required
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Availability Time */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Availability Time
            </label>
            <input
              type="text"
              name="availabilityTime"
              value={formData.availabilityTime}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Experience Level */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Experience Level
            </label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full select select-bordered"
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full input input-bordered"
              min="0"
              max="5"
              step="0.1"
            />
          </div>

          {/* Partner Count */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Partner Count
            </label>
            <input
              type="number"
              name="partnerCount"
              value={formData.partnerCount}
              onChange={handleChange}
              className="w-full input input-bordered"
              min="0"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Partner Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePartner;
