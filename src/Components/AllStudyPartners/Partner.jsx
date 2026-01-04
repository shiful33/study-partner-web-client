import React from "react";
import { Link } from "react-router-dom";

const Partner = ({ partner }) => {
  const { _id, name, profileimage, subject, experienceLevel, rating } = partner;

  return (
    <div>
      <div className="p-4 transition border-b shadow-sm hover:shadow-none border-amber-200 hover:border-none bg-base-200 card card-side">
        <figure>
          <img
            src={partner.profileimage}
            className="w-[160px] h-[200px] rounded-sm shadow-sm object-cover"
            alt="Movie"
          />
        </figure>
        <div className="text-left card-body text-shadow-light">
          <h2 className="card-title text-[#001F46] text-[24px]">
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
              to={`/partnerDetails/${_id}?from=studies`}
              className="w-full text-gray-600 btn-outline hover:bg-white btn text-shadow-light"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
