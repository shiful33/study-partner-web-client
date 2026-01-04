import React from "react";
import NavBar from "../NavBar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer";
import HeroSlider from "../HeroSlider";
import FeatureCards from "../FeatureCard";
import Chatbot from "../Chatbot";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <NavBar />
      {isHomePage && (
        <>
          <HeroSlider />
          <FeatureCards />
        </>
      )}
      <main className="w-10/12 mx-auto">
        <Outlet />
        <Chatbot />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
