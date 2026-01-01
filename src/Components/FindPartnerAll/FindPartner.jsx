import React from "react";
import { Link } from "react-router-dom";

const FindPartner = ({ partner }) => {
  if (!partner) return null;

  const { _id, name, profileimage, subject, experienceLevel, rating } = partner;

  return (
    <div className="">
      <div className="p-8 transition bg-gray-100 shadow-1 lg border-1 hover:shadow-none border-amber-100 hover:border-none card card-side">
        <figure>
          <img
            src={partner.profileimage}
            className="w-[160px] h-[200px] rounded-sm shadow-sm object-cover"
            alt="Movie"
          />
        </figure>
        <div className="text-left card-body text-shadow-light">
          <h2 className="card-title text-gray-600 text-[20px] text-shadow-light">
            {partner.name}
          </h2>

          <h2 className="card-title font-normal text-[16px]">
            Subjects:{" "}
            <span className=" text-[14px] text-purple-900 font-normal">
              {partner.subject}
            </span>
          </h2>

          <p>
            Skill:{" "}
            <span className=" text-[14px] text-purple-900 font-normal">
              {partner.experienceLevel}
            </span>
          </p>

          <p>
            Ratings:{" "}
            <span className=" text-[14px] text-purple-900 font-normal">
              {partner.rating}
            </span>
          </p>

          <div className="justify-end card-actions">
            <Link
              to={`/partnerDetails/${_id}?from=findPartners`}
              className="w-full text-gray-600 rounded-lg btn-outline hover:bg-white btn text-shadow-light"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPartner;
