import React, { useState } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa";
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
  console.log("Partner Data:", partner);
  const [requestSent, setRequestSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStudyRequest = async () => {
    if (requestSent) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/send-partner-request", {
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

  return (
    <div>
      <div className="min-h-screen hero">
        <div className="flex-col justify-center lg:gap-20 hero-content lg:flex-row h-[380px]">
          <div>
            <img
              src={partner.profileimage}
              className="border-4 border-yellow-400 p-2 shadow-lg w-[300px] h-[300px] rounded-full object-cover opacity-100"
            />

            <h1 className="text-[32px] text-center font-bold dark:text light:text text-shadow-light mt-6">
              {partner.name}
            </h1>
          </div>
          <div className="p-6 text-left border-yellow-400 rounded-md shadow-md border-1">
            <h1 className="flex items-end text-[22px] font-bold  dark:text light:text text-shadow-light">
              Name
              <CgBorderStyleSolid className="font-extrabold text-[18px] text-yellow-400" />
              {partner.name}
            </h1>

            <h4 className="font-semibold ">
              Subject:{" "}
              <span className="font-normal text-yellow-700 text-shadow-light">
                {partner.subject}
              </span>
            </h4>

            <h4 className="font-semibold ">
              Skill:{" "}
              <span className="font-normal text-purple-800 text-shadow-light">
                {partner.experienceLevel}
              </span>
            </h4>

            <h4 className="font-semibold ">
              Ratings:{" "}
              <span className="font-normal text-yellow-400 text-shadow-light">
                {partner.rating}
              </span>
            </h4>

            <div className="mt-4 border-yellow-200 border-1 w-50/100"></div>

            <div className="p-2 mt-4 shadow-md lg:w-[700px]">
              <h4 className="font-normal mt-4 text-[16px] flex gap-1">
                Study Mode:
                <span className="font-normal text-green-500 text-shadow-light">
                  {partner.studyMode}
                </span>
              </h4>

              <h4 className="flex gap-1 font-normal">
                Study Time:
                <span className="font-normal dark:text light:text text-shadow-light">
                  {partner.availabilityTime}
                </span>
              </h4>

              <h4 className="flex gap-1 font-normal">
                Total Partner:
                <span className="font-normal dark:text light:text text-shadow-light">
                  {partner.partnerCount}
                </span>
              </h4>

              <p className="my-4 text-[15px]">
                <span className="font-semibold dark:text light:text">Descriptioon: </span>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>

            <div>
              <h3 className="flex items-end pt-6 mt-4 text-xl font-semibold text-shadow-light">
                Contact Info
                <CgBorderStyleSolid className="font-extrabold text-[18px] text-yellow-400" />
              </h3>
              <h4 className="flex items-center gap-2 mt-8 font-normal ">
                <FaPhoneVolume className="text-[24px] text-green-500" />
                <span className="font-normal dark:text light:text text-shadow-light">
                  {partner.contactNumber}
                </span>
              </h4>

              <h4 className="flex items-center gap-2 mt-4 font-normal">
                <MdAttachEmail className="text-[24px] text-blue-500" />
                <span className="font-normal dark:text light:text text-shadow-light">
                  {partner.email}
                </span>
              </h4>

              <h4 className="flex items-center gap-2 mt-4 mb-6 font-normal">
                <IoLocation className="text-[24px] text-red-500" />
                <span className="font-normal dark:text light:text text-shadow-light">
                  {partner.location}
                </span>
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
              onClick={handleStudyMessage}
              disabled={loading || requestSent}
              className={`w-[50%] btn mt-6 text-white font-bold transition-all ${
                requestSent
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading
                ? "Sending..."
                : requestSent
                ? "Request Sent"
                : "Send Partner Message"}
            </button>
            </div>
          </div>
        </div>
      </div>
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
