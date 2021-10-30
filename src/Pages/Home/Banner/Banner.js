import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <section id="banner">
            <div className="d-flex align-items-center justify-content-center h-100 w-100 text-white banner-text">
                <div>
                    <h1 className="display-1 fw-bold">Enjoy your stay</h1>
                    <p className="mt-5 fs-2">Discover amazing places at exclusive deals</p>

                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default Banner;