import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="text-center mt-5 py-5 text-white bg-dark">
            <p>© Fantastic Journeys Ltd. {currentYear}</p>
        </div>
    );
};

export default Footer;