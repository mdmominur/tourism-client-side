import React from 'react';

const About = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-6"><img className="img-fluid" src="https://i.ibb.co/c3C05RJ/about-image-1-1.png" alt="" /></div>
                <div className="col-md-6">
                    <div className="mt-4">
                        <span className="text-brand fs-2">ABOUT</span>
                        <h1 className="display-3 fw-bold uppercase">We Help You Planning Your Journey</h1>
                        <p className="fs-5 mt-4">
                        The World Tourism Organization (UNWTO) is the United Nations agency responsible for the promotion of responsible, sustainable and universally accessible tourism.
                        </p>
                        <p>
                        As the leading international organization in the field of tourism, UNWTO promotes tourism as a driver of economic growth, inclusive development and environmental sustainability and offers leadership and support to the sector in advancing knowledge and tourism policies worldwide.
                        </p>
                        <button className="button-brand mt-4">EXPLORE MORE <i className="fas fa-long-arrow-alt-right"></i></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;