import FindPartnersData from "./FindPartnersData";

const findPartnerPromise = fetch("https://study-partner-web-server.vercel.app/find-partners").then(
  (res) => res.json()
);

const FindPartners = () => {
  return (
    <div>
      <FindPartnersData
        findPartnerPromise={findPartnerPromise}
      ></FindPartnersData>
    </div>
  );
};

export default FindPartners;
