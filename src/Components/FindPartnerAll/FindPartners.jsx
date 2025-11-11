import FindPartnersData from './FindPartnersData';

const findPartnerPromise = fetch('http://localhost:3000/find-partners')
.then(res => res.json());

const FindPartners = () => {

    return (
        <div>
            <FindPartnersData findPartnerPromise={findPartnerPromise}></FindPartnersData>
        </div>
    );
};

export default FindPartners;