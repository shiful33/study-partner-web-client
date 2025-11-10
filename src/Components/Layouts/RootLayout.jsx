import React from 'react';
import NavBar from '../NavBar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Footer';
import HeroSlider from '../HeroSlider';
import FeatureCards from '../FeatureCard';

const RootLayout = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div>
            <NavBar />
            {isHomePage && (
                <>
                <HeroSlider />
                <FeatureCards />
                </>
            )}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;