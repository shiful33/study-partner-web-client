import React, { useState } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaPhoneVolume, FaTimes } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import { toast } from "react-toastify";

const PartnerDetails = () => {
  const partner = useLoaderData();
  const [requestSent, setRequestSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleStudyRequest = async () => {
    if (requestSent) return;
    setLoading(true);
    try {
      const res = await fetch("https://study-partner-web-server.vercel.app/send-partner-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partner),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Study request sent!");
        setRequestSent(true);
      } else {
        toast.info(data.message);
      }
    } catch {
      toast.error("Failed to send request.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast.error("Please write a message!");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://study-partner-web-server.vercel.app/send-partner-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: partner.email,
          name: partner.name,
          message: message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setShowMessageModal(false);
        setMessage("");
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch {
      toast.error("Network error. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen hero">
        <div className="flex-col justify-center lg:gap-20 hero-content lg:flex-row h-[380px]">
          <div>
            <img
              src={partner.profileimage}
              className="border-4 border-yellow-400 p-2 shadow-lg w-[300px] h-[300px] rounded-full object-cover"
              alt={partner.name}
            />
            <h1 className="text-[32px] text-center font-bold dark:text light:text dark:text mt-6">
              {partner.name}
            </h1>
          </div>

          <div className="p-6 text-left border border-yellow-400 rounded-md shadow-md">
            <h1 className="flex items-end text-[22px] font-bold  light:text dark:text dark:text-white">
              Name{" "}
              <CgBorderStyleSolid className="text-[18px] text-yellow-400" />{" "}
              {partner.name}
            </h1>
            <h4 className="font-semibold">
              Subject:{" "}
              <span className="font-normal text-yellow-700">
                {partner.subject}
              </span>
            </h4>
            <h4 className="font-semibold">
              Skill:{" "}
              <span className="font-normal text-purple-800">
                {partner.experienceLevel}
              </span>
            </h4>
            <h4 className="font-semibold">
              Ratings:{" "}
              <span className="font-normal text-yellow-400">
                {partner.rating}
              </span>
            </h4>

            <div className="w-full mt-4 border border-yellow-200"></div>

            <div className="p-2 mt-4 shadow-md lg:w-[700px]">
              <h4 className="flex gap-1">
                Study Mode:{" "}
                <span className="text-green-500">{partner.studyMode}</span>
              </h4>
              <h4 className="flex gap-1">
                Study Time: <span>{partner.availabilityTime}</span>
              </h4>
              <h4 className="flex gap-1">
                Total Partner: <span>{partner.partnerCount}</span>
              </h4>
              <p className="my-4 text-[15px]">
                <span className="font-semibold">Description: </span>
                {partner.description || "No description available."}
              </p>
            </div>

            <div>
              <h3 className="flex items-end pt-6 mt-4 text-xl font-semibold light:text dark:text">
                Contact Info{" "}
                <CgBorderStyleSolid className="text-[18px] text-yellow-400" />
              </h3>
              <h4 className="flex items-center gap-2 mt-4">
                <FaPhoneVolume className="text-[24px] text-green-500" />
                <span>{partner.contactNumber}</span>
              </h4>
              <h4 className="flex items-center gap-2 mt-4">
                <MdAttachEmail className="text-[24px] text-blue-500" />
                <span>{partner.email}</span>
              </h4>
              <h4 className="flex items-center gap-2 mt-4 mb-6">
                <IoLocation className="text-[24px] text-red-500" />
                <span>{partner.location}</span>
              </h4>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleStudyRequest}
                disabled={loading || requestSent}
                className={`w-[50%] btn mt-6 text-white font-bold transition-all ${
                  requestSent
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-yellow-400 hover:bg-yellow-500"
                }`}
              >
                {loading
                  ? "Sending..."
                  : requestSent
                  ? "Request Sent"
                  : "Send Partner Request"}
              </button>

              <button
                onClick={() => setShowMessageModal(true)}
                disabled={loading || requestSent}
                className="w-[50%] btn mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold"
              >
                Send Partner Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white shadow-2xl dark:bg-gray-800 rounded-xl">
            <button
              onClick={() => setShowMessageModal(false)}
              className="absolute text-gray-500 top-3 right-3 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold text-[#001F46] dark:text-white mb-4">
              Send Message to {partner.name}
            </h2>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none dark:bg-gray-700 dark:text-white"
              rows="5"
            ></textarea>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSendMessage}
                disabled={sending}
                className="flex-1 font-bold text-white bg-blue-500 btn hover:bg-blue-600"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
              <button
                onClick={() => setShowMessageModal(false)}
                className="flex-1 font-bold text-gray-800 bg-gray-300 btn hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Partner Not Found!
          </h1>
          <p>The study partner doesn't exist.</p>
        </div>
      );
    }
  }
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
    </div>
  );
}

export default PartnerDetails;
