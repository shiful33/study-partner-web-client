import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoadingSpinner from "../LoadingSpinner";

const MyConnection = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/myConnection");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setConnections(data);
    } catch (error) {
      toast.error("Failed to load connections.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      fetchConnections();
    };
    window.addEventListener("partner-updated", handleUpdate);
    return () => window.removeEventListener("partner-updated", handleUpdate);
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Remove this partner?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/delete-partner/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        toast.success("Partner removed!");
        fetchConnections();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  if (loading) {
    return <LoadingSpinner center message="Loading My Connections..." />;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center dark:light dark:text mb-[80px]">
          My Connections
        </h1>

        {connections.length === 0 ? (
          <p className="py-10 text-center text-gray-500">No connections yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {connections.map((p) => (
              <div
                key={p._id}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
              >
                <img
                  src={p.profileimage || "https://via.placeholder.com/150"}
                  alt={p.name}
                  className="object-cover w-20 h-20 mx-auto mb-4 border-2 border-yellow-400 rounded-full"
                />
                <h3 className="text-xl font-bold text-[#001F46] dark:text-white text-center mb-2">
                  {p.name}
                </h3>
                <p className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">
                  Subject: {p.subject}
                </p>
                <p className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">
                  Skill: {p.experienceLevel}
                </p>
                <p className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">
                  Rating: {p.rating}
                </p>
                <p className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">
                  Study Mode: {p.studyMode}
                </p>
                <p className="mb-4 text-sm text-center text-gray-600 dark:text-gray-300">
                  Location: {p.location}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-sm font-bold bg-transparent border border-yellow-200 text-[#001F46] dark:text-white hover:bg-red-500 hover:text-white"
                  >
                    Remove Partner
                  </button>
                  <Link
                    to={`/update-partner/${p._id}`}
                    className="btn btn-sm font-bold bg-transparent border border-yellow-200 text-[#001F46] dark:text-white hover:bg-yellow-500"
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
