import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer';
import HeroSlider from '../HeroSlider';
import FeatureCards from '../FeatureCard';

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <HeroSlider />
            <FeatureCards />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;