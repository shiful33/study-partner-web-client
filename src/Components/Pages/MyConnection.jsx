import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoadingSpinner from "../LoadingSpinner";
import { Boxes } from "lucide-react";

const MyConnection = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://study-partner-web-server.vercel.app/myConnection");
      console.log("Response status:", res.status);

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to fetch");
      }

      const data = await res.json();
      console.log("Received data:", data);
      setConnections(data);
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error(error.message || "Failed to load connections.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    const handleUpdate = () => fetchConnections();
    window.addEventListener("partner-updated", handleUpdate);
    return () => window.removeEventListener("partner-updated", handleUpdate);
  }, []);

  // DELETE PARTNER
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete?",
      text: "Are You Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Delete It",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-partner-web-server.vercel.app/delete-partner/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            toast.success("Delete Successful!");
            fetchConnections();
          })
          .catch(() => toast.error("Failed"));
      }
    });
  };

  if (loading) {
    return <LoadingSpinner center message="Loading My Connections..." />;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="flex items-center justify-center gap-4 mb-20 text-2xl font-bold text-center light:text dark:text">
          My Connections <Boxes className="text-[32px] text-yellow-400 animate-pulse" />
        </h1>

        {connections.length === 0 ? (
          <p className="py-10 text-center text-gray-500">No connections yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {connections.map((p) => (
              <div
                key={p._id}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
              >
                <img
                  src={p.profileimage || "https://via.placeholder.com/150"}
                  alt={p.name}
                  className="object-cover w-20 h-20 mx-auto mb-4 border-2 border-yellow-400 rounded-full"
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[#001F46] dark:text-white mb-2">
                  {p.name}
                </h3>
                <p className="mb-2 text-sm text-left text-gray-600 dark:text-gray-300">
                  Subject: {p.subject}
                </p>
                <p className="mb-2 text-sm text-left text-gray-600 dark:text-gray-300">
                  Skill: {p.experienceLevel}
                </p>
                <p className="mb-2 text-sm text-left text-gray-600 dark:text-gray-300">
                  Rating: {p.rating}
                </p>
                <p className="mb-2 text-sm text-left text-gray-600 dark:text-gray-300">
                  Study Mode: {p.studyMode}
                </p>
                <p className="mb-4 text-sm text-left text-gray-600 dark:text-gray-300">
                  Location: {p.location}
                </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn w-[50%] btn-sm font-bold bg-transparent border border-yellow-200 text-[#001F46] dark:text-white hover:bg-red-500 hover:text-white"
                  >
                    Remove Partner
                  </button>
                  <Link
                    to={`/update-partner/${p._id}`}
                    className="btn w-[50%] btn-sm font-bold bg-transparent border border-yellow-200 text-[#001F46] dark:text-white hover:bg-yellow-500 hover:text-white"
                  >
                    Update Partner
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyConnection;
