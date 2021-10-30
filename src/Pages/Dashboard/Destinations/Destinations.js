import React from 'react';
import { NavLink } from 'react-router-dom';

const Destinations = () => {
  
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-between mt-5">
                <h1>Destinations</h1>
                <NavLink to="/dashboard/createDestination" ><button className="button-brand">Create Destination</button></NavLink>
            </header>
            
        </div>
    );
};

export default Destinations;