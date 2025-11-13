import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePartnerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    profileimage: "",
    subject: "",
    studyMode: "",
    availabilityTime: "",
    location: "",
    experienceLevel: "",
    rating: 0,
    partnerCount: 0,
    contactNumber: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://study-partner-web-server.vercel.app/create-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create partner");

      toast.success("Partner profile created successfully!");
      navigate("/findPartners");
    } catch (error) {
      toast.error("Failed to create partner: " + error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen py-20">
      <div className="max-w-lg p-8 mx-auto bg-white border border-yellow-200 shadow-lg rounded-xl">
        <h1 className="text-[24px] font-bold text-center text-[#001F46] mb-6">
          Create Partner Profile
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
              placeholder="https://example.com/image.jpg"
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
              placeholder="e.g., Evening 6-9 PM"
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
              placeholder="e.g., Dhaka, Bangladesh"
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
              Initial Rating
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
              placeholder="e.g., 4.5"
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
              placeholder="e.g., 0"
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
              placeholder="+880 17xxxxxxxx"
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
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Partner Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
