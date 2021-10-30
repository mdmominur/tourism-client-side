import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import useDatabase from '../../../Hooks/useDatabase';
import useDb from '../../../Hooks/useDb';
import Booking from '../Booking/Booking';

const MyBookings = () => {
    const {myBookings, setMyBookings} = useDb();
    const {user} = useAuth();
    //Get my bookings
    useEffect(()=>{
        axios.get(`https://tourism-server-by-mominur.herokuapp.com/my-bookings/${user.email}`)
        .then(res => setMyBookings(res.data));
    },[]);
    const {destinations} = useDatabase();
    return (
        <div className="col-10 col-md-9">
            <div className="py-5 px-3 px-md-5 shadow-lg rounded">
                <header className="d-flex flex-wrap justify-content-between">
                    <h1>My Bookings</h1>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            myBookings.length && destinations.length
                            ?
                            myBookings.map(booking => <Booking booking={booking} destination={destinations.find(des => des._id === booking.des_id)} manageBooking={false} key={booking._id}></Booking>)
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

export default MyBookings;