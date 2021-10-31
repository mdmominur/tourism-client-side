import React from 'react';
import { Spinner } from 'react-bootstrap';
import useDb from '../../../Hooks/useDb';


const Main = () => {
    const {destinations, bookings} = useDb()
    return (
        <div className="col-10 col-md-9 ">
            <div className="py-5 px-3 px-md-5 shadow-lg rounded">
                <header className="d-flex flex-wrap justify-content-between">
                    <h1>Dashboard</h1>
                </header>
                <div className="mt-4">
                    {
                        destinations.length && bookings.length ?
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-center bg-info rounded p-4">
                                    <span className="fs-2 fw-bolder text-white">Total Destinations</span>
                                    <h1 className="display-1 fw-bolder  text-brand-secondary">{destinations.length}</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-center bg-success rounded p-4 mt-4 mt-md-0">
                                    <span className="fs-2 fw-bolder text-white ">Total Bookings</span>
                                    <h1 className="display-1 fw-bolder text-brand">{bookings.length}</h1>
                                </div>
                            </div>
                            
                        </div>
                        :<div className="text-center mt-5 w-100"><Spinner animation="border" variant="dark" /></div>
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Main;