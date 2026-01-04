import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  User,
  Image,
  Book,
  Monitor,
  Clock,
  MapPin,
  Award,
  Star,
  Users,
  Phone,
  Mail,
  RefreshCcw,
} from "lucide-react";

// Inline Loading Spinner Component (Jehetu external file resolve hochchena)
const LocalLoadingSpinner = ({ message }) => (
  <div className="flex flex-col items-center justify-center p-20 space-y-4">
    <div className="w-12 h-12 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
    <p className="text-[#001F46] font-medium">{message || "Loading..."}</p>
  </div>
);

const UpdatePartner = () => {
  const partner = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...partner });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updateRes1 = await fetch(
        "https://study-partner-web-server.vercel.app/update-partner",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, _id: partner._id }),
        }
      );

      const updateRes2 = await fetch(
        `https://study-partner-web-server.vercel.app/update-myConnection/${partner._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!updateRes1.ok || !updateRes2.ok) {
        throw new Error("Failed to update data.");
      }

      window.dispatchEvent(new Event("partner-updated"));
      toast.success("Profile Update Successful!");
      navigate("/myConnection");
    } catch (error) {
      toast.error("Update failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!formData || !partner) {
    return <LocalLoadingSpinner message="Partner data load hochche..." />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-[20px] overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-[#001F46] p-8 text-center text-white">
          <h1 className="mb-2 text-xl font-black tracking-tight te md:text-3xl">
            Update Partner Details
          </h1>
          <p className="text-sm text-blue-200 opacity-80">
            Apnar tathyo-gulo paribartan ba update korun
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <User size={14} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Book size={14} /> Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Study Mode */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Monitor size={14} /> Study Mode
                </label>
                <select
                  required
                  name="studyMode"
                  value={formData.studyMode || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none appearance-none cursor-pointer rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="In-Person">In-Person</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <MapPin size={14} /> Location
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Star size={14} /> Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating || 0}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Profile Image URL */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Image size={14} /> Profile Image URL
                </label>
                <input
                  type="url"
                  name="profileimage"
                  value={formData.profileimage || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Availability Time */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Clock size={14} /> Availability Time
                </label>
                <input
                  required
                  type="text"
                  name="availabilityTime"
                  value={formData.availabilityTime || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Award size={14} /> Experience Level
                </label>
                <select
                  required
                  name="experienceLevel"
                  value={formData.experienceLevel || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none appearance-none cursor-pointer rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Partner Count */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Users size={14} /> Partner Count
                </label>
                <input
                  type="number"
                  name="partnerCount"
                  value={formData.partnerCount || 0}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Phone size={14} /> Contact Number
                </label>
                <input
                  required
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber || ""}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          </div>

          {/* Update Button Section */}
          <div className="mt-12">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-[#001F46] font-black text-lg transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3
                ${
                  loading
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-200 cursor-pointer"
                }
              `}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-4 border-[#001F46] border-t-transparent rounded-full animate-spin"></div>
                  Updating Profile...
                </div>
              ) : (
                <>
                  <RefreshCcw
                    size={20}
                    className={loading ? "animate-spin" : ""}
                  />
                  Update Partner Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePartner;
