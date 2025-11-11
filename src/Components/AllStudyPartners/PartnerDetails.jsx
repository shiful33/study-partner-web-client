import React from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { RxBorderSolid } from "react-icons/rx";
import { useLoaderData } from "react-router";

const PartnerDetails = () => {
  const partner = useLoaderData();
  // console.log(partner);

  return (
    <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col justify-center lg:gap-20 hero-content lg:flex-row">
          <div>
            <img
            src={partner.profileimage}
            className="border-4 border-yellow-400 p-2 shadow-lg w-[300px] h-[300px] rounded-full object-cover opacity-100"
          />
          
          <h1 className="text-[32px] font-bold text-[#001F46] text-shadow-light mt-6">
              {partner.name}
            </h1>
          </div>
          <div className="p-6 text-left border-yellow-400 rounded-md shadow-md border-1">
            <h1 className="flex items-end text-[22px] font-bold text-[#001F46] text-shadow-light">Name<CgBorderStyleSolid className="font-extrabold text-[18px] text-yellow-400"/> 
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

            <div className="p-2 mt-4 bg-gray-200 shadow-md lg:w-[700px]">
              <h4 className="font-normal mt-4 text-[16px]">
                Study Mode:
                <span className="font-normal text-green-500 text-shadow-light">
                  {partner.studyMode}
                </span>
              </h4>

              <h4 className="font-normal">
                Study Time: 
                <span className="font-normal text-[#001F46] text-shadow-light">
                {partner.availabilityTime}
                </span>
              </h4>

              <h4 className="font-normal">
                Total Partner: 
                <span className="font-normal text-[#001F46] text-shadow-light">
                {partner.partnerCount}
                </span>
              </h4>

              <p className="my-4 text-[15px]">
                <span className="font-semibold ">Descriptioon: </span>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>

            <div>
              <h3 className="flex items-end pt-6 mt-4 text-xl font-semibold text-shadow-light">Contact Info<CgBorderStyleSolid className="font-extrabold text-[18px] text-yellow-400"/></h3>
              <h4 className="flex items-center gap-2 mt-8 font-normal ">
                <FaPhoneVolume className="text-[24px] text-green-500"/> 
                <span className="font-normal text-[#001F46] text-shadow-light">
                {partner.contactNumber}
                </span>
              </h4>

              <h4 className="flex items-center gap-2 mt-4 font-normal">
                <MdAttachEmail className="text-[24px] text-blue-500" /> 
                <span className="font-normal text-[#001F46] text-shadow-light">
                {partner.email}
                </span>
              </h4>

              <h4 className="flex items-center gap-2 mt-4 mb-6 font-normal">
                <IoLocation className="text-[24px] text-red-500" /> 
                <span className="font-normal text-[#001F46] text-shadow-light">
                {partner.location}
                </span>
              </h4>
            </div>

            <button className="border-2 border-yellow-400 bg-yellow-400/50 btn hover:bg-yellow-400 text-">Study Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
