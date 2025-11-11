import { use } from "react";
import FindPartner from "./FindPartner";
import { GiTrophyCup } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

const FindPartnersData = ({findPartnerPromise}) => {
  
  const partners = use(findPartnerPromise);

  return (
    <div className='my-[80px]'>
            <h2 className='flex justify-center items-center gap-3 text-[26px] font-semibold text-shadow-light text-[#001F46] mb-[80px]'>Find Study Partner <FaUserGraduate className="text-yellow-500 text-[40px]"/></h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
              partners.map(partner => <FindPartner key={partner._id} partner={partner}></FindPartner>)
            }
            </div>
        </div>
  );
};

export default FindPartnersData;
