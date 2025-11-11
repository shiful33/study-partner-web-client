import React from 'react';
import TopStudyPartner from '../AllStudyPartners/TopStudyPartner';

const topStudyPartnerPromise = fetch('http://localhost:3000/studies')
.then(res => res.json());

const Home = () => {
    return (
        <div>
            <TopStudyPartner topStudyPartnerPromise={topStudyPartnerPromise}></TopStudyPartner>
        </div>
    );
};

export default Home;