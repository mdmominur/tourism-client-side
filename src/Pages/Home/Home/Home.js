import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Destinations></Destinations>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;