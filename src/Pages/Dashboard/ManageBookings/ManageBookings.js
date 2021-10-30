import React from 'react';
import { Spinner } from 'react-bootstrap';
import useDb from '../../../Hooks/useDb';
import Booking from '../Booking/Booking';

const ManageBookings = () => {
    const {bookings} = useDb();
    const {destinations} = useDb();
    return (
        <div className="col-10 col-md-9 ">
            <div className="py-5 px-3 px-md-5 shadow-lg rounded">
                <header className="d-flex flex-wrap justify-content-between">
                    <h1>Manage Bookings</h1>
                </header>
                
                <div className="mt-5 overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Cost</th>
                                <th>Your Address</th>
                                <th>Status</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            bookings.length && destinations.length
                            ?
                            bookings.map(booking => <Booking booking={booking} destination={destinations.find(des => des._id === booking.des_id)} manageBooking={true} key={booking._id}></Booking>)
                            :<tr><td><div className="text-center mt-5"><Spinner animation="border" variant="dark" /></div></td></tr>
                        }
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                   
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;