import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyConnection = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const res = await fetch("http://localhost:3000/my-connections");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setConnections(data);
    } catch (error) {
      toast.error("Failed to load connections.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting ID:", id, typeof id);

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
        console.log("Response:", data);

        if (!res.ok) throw new Error(data.message);

        toast.success("Partner removed!");
        fetchConnections();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  if (loading) return <p className="py-10 text-center">Loading...</p>;

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#001F46] text-shadow-light mb-[80px]">
          My Connections
        </h1>

        {connections.length === 0 ? (
          <p className="py-10 text-center text-gray-500">No connections yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {connections.map((p) => (
              <div
                key={p._id}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <img
                  src={p.profileimage || "https://via.placeholder.com/150"}
                  alt={p.name}
                  className="object-cover w-20 h-20 mx-auto mb-4 border-2 border-yellow-400 rounded-full"
                />
                <h3 className="text-xl font-bold text-[#001F46] text-center mb-2">
                  {p.name}
                </h3>
                <p className="mb-2 text-sm text-center text-gray-600">
                  Subject: {p.subject}
                </p>
                <p className="mb-2 text-sm text-center text-gray-600">
                  Skill: {p.experienceLevel}
                </p>
                <p className="mb-2 text-sm text-center text-gray-600">
                  Rating: {p.rating}
                </p>
                <p className="mb-4 text-sm text-center text-gray-600">
                  Location: {p.location}
                </p>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="w-full font-bold transition-all bg-transparent shadow-lg btn border-yellow-200 btn-sm bg-outline hover:shadow-none text-[#011F46]"
                >
                  Remove Partner
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyConnection;
