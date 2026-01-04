import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Image, Book, Monitor, Clock, MapPin, Award, Star, Users, Phone, Mail, Rocket } from "lucide-react";

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
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-[20px] overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-[#001F46] p-8 text-center">
          <h1 className="mb-2 text-xl tracking-tight text-white md:text-3xl">Create Partner Profile</h1>
          <p className="text-sm text-blue-200 opacity-80">Create your profile and find the right study partner</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          {/* Form Grid: 2 Columns on medium screens and up */}
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="Rafid Ahmed"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Book size={14} /> Subject / Topic
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g. Mathematics"
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
                  value={formData.studyMode}
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
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="Dhaka, Bangladesh"
                />
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Star size={14} /> Initial Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="0" max="5" step="0.1"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="name@email.com"
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
                  value={formData.profileimage}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="https://..."
                />
              </div>

              {/* Availability Time */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Clock size={14} /> Availability
                </label>
                <input
                  required
                  type="text"
                  name="availabilityTime"
                  value={formData.availabilityTime}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g. 6 PM - 9 PM"
                />
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Award size={14} /> Experience
                </label>
                <select
                  required
                  name="experienceLevel"
                  value={formData.experienceLevel}
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
                  <Users size={14} /> Partners Worked With
                </label>
                <input
                  type="number"
                  name="partnerCount"
                  value={formData.partnerCount}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <Phone size={14} /> Phone Number
                </label>
                <input
                  required
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-5 py-3 transition-all border-none rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
                  placeholder="+880 17..."
                />
              </div>
            </div>
          </div>

          {/* Full Width Button Section */}
          <div className="mt-12">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl text-[#001F46] font-black text-lg transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3
                ${loading ? 'bg-gray-200 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-200 cursor-pointer'}
              `}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-4 border-[#001F46] border-t-transparent rounded-full animate-spin cursor-pointer"></div>
                  Processing...
                </div>
              ) : (
                <>
                  <Rocket size={20} />
                  Create Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;