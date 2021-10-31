import axios from "axios";
import { useEffect, useState } from "react";
const useDatabase = () => {
    const [resetForm, setResetForm] = useState(false);
    const [destinations, setDestinations] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [myBookings, setMyBookings] = useState([]);
    
    //Post destinations
    const handleCreateDestinaitonPost = data => {
        axios.post('https://tourism-server-by-mominur.herokuapp.com/destinations', data)
        .then(result => {
            if(result.data.insertedId){
                setResetForm(true);
            }
        });
    }
    //Get Destinations
    useEffect(()=>{
        axios.get('https://tourism-server-by-mominur.herokuapp.com/destinations')
        .then(res => setDestinations(res.data));
    },[]);


    //Get bookings
    useEffect(()=>{
        axios.get('https://tourism-server-by-mominur.herokuapp.com/bookings')
        .then(res => setBookings(res.data));
    },[]);
    

     //Post booking
     const handleBookingPost = data => {
         
        axios.post('https://tourism-server-by-mominur.herokuapp.com/bookings', data)
        .then(result => {
            if(result.data.insertedId){
                setResetForm(true);
            }
        });

        return true;
    }


    //Delete bookings
    const deleteBooking = id =>{
        const confirmation = window.confirm('Are you sure?');
        if(confirmation){
            axios.delete(`https://tourism-server-by-mominur.herokuapp.com/bookings/${id}`)
            .then(res => {
                if(res.data.deletedCount){
                    const updatedBookings = bookings.filter(book => book._id !== id);
                    setBookings(updatedBookings);

                    const updatedMyBookings = myBookings.filter(book => book._id !== id);
                    setMyBookings(updatedMyBookings);
                }
            });
        }
    }




    return {
        handleCreateDestinaitonPost,
        resetForm,
        setResetForm,
        destinations,
        handleBookingPost,
        bookings,
        setBookings,
        myBookings,
        setMyBookings,
        deleteBooking,
        
    };


    
}

export default useDatabase;