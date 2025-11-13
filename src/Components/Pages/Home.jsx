import React, { useState } from "react";
import TopStudyPartner from "../AllStudyPartners/TopStudyPartner";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testmonials";
import TrustBadges from "./TrustBadges";
import StatsCount from "./StatsCount";
import LoadingSpinner from "../LoadingSpinner";
import FAQSection from "../FAQSection";

const topStudyPartnerPromise = fetch("http://localhost:3000/studies").then(
  (res) => res.json()
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  if (loading) {
    return <LoadingSpinner center message="Welcome to home..." />;
  }

  return (
    <div>
      <TopStudyPartner
        topStudyPartnerPromise={topStudyPartnerPromise}
      ></TopStudyPartner>
      <HowItWorks />
      <StatsCount />
      <TrustBadges />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default Home;
