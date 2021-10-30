
import axios from "axios";
import { useState } from "react";
import useDb from "../../../Hooks/useDb";

const Booking = ({booking, destination, manageBooking}) => {
    const {imgUrl, title, cost} = destination;
    const {_id,status, address, email} = booking;
    const {deleteBooking, bookings, setBookings} = useDb();
    //Handle delete booking
    const handleDeleteBooking = id =>{
        
        deleteBooking(id);
    }

    //Handle update Status
    const handleUpdateStatus = id => {
        axios.put(`https://tourism-server-by-mominur.herokuapp.com/bookings/${id}`)
        .then(res =>{
            if(res.data.modifiedCount){
                const updatedBookings = [];
                bookings.forEach(element => {
                    if(element._id === id){
                        element.status = 1;
                        updatedBookings.push(element);
                    }else{
                        updatedBookings.push(element);

                    }
                });
                setBookings(updatedBookings);
            }

        });
    }

    return (
        <tr>
            <td><img width="100" src={imgUrl} alt="" /></td>
            <td>{title}</td>
            <td>{email}</td>
            <td>{cost}</td>
            <td>{address}</td>
            <td>{status ? "Apporved": "Pending"}</td>
            {
                manageBooking && !status && <td><button className="btn btn-sm btn-success" onClick={() => handleUpdateStatus(_id)}>Approve</button></td>
            }
            
            <td><button className="btn btn-sm btn-danger" onClick={() => handleDeleteBooking(_id)}>Delete</button></td>
        </tr>
    );
};

export default Booking;