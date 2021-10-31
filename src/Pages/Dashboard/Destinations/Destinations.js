import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useDb from '../../../Hooks/useDb';

const Destinations = () => {
    const {destinations} = useDb();
  
    return (
        <div className="col-10 col-md-9 ">
        <div className="py-5 px-3 px-md-5 shadow-lg rounded">
            <header className="d-flex flex-wrap justify-content-between">
                <h1>Destinations</h1>
                <NavLink to="/dashboard/createDestination" ><button className="button-brand">Create Destination</button></NavLink>
            </header>
            
            <div className="mt-5 overflow-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Cost</th>
                            <th>Duration</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        destinations.length
                        ?
                        destinations.map(destination => <tr key={destination._id}>
                            <td><img width="100" src={destination.imgUrl} alt="" /></td>
                            <td>{destination.title}</td>
                            <td>{destination.cost}</td>
                            <td>{destination.duration}</td>
                            <td>{destination.description}</td>
                        </tr>)
                        :<tr><td colSpan="10"><div className="text-center mt-5 w-100"><Spinner animation="border" variant="dark" /></div></td></tr>
                    }
                    </tbody>
                    <tfoot></tfoot>
                </table>
               
            </div>
        </div>
    </div>
    );
};

export default Destinations;