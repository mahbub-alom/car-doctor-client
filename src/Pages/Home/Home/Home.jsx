import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import SingleService from '../Services/SingleService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SingleService></SingleService>
        </div>
    );
};

export default Home;