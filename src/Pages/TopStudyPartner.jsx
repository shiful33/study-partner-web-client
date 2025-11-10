import React, { use } from 'react';
import Partner from '../Components/Partner';
import { GiTrophyCup } from 'react-icons/gi';

const TopStudyPartner = ({ topStudyPartnerPromise }) => {

    const partners = use(topStudyPartnerPromise);
    console.log(partners)

    return (
        <div className='my-[80px]'>
            <h2 className='flex justify-center items-center gap-3 text-[26px] font-semibold text-shadow-light text-[#001F46] mb-[80px]'>Top Study Partner <GiTrophyCup className='text-[45px] text-yellow-500 text-shadow-light' /></h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                partners.map(partner => <Partner key={partner._id} partner={partner}></Partner>)
            }
            </div>
        </div>
    );
};

export default TopStudyPartner;