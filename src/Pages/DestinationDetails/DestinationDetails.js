import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useDatabase from '../../Hooks/useDatabase';
import './DestinationDetails.css';

const DestinationDetails = () => {
    const [destination, setDestination] = useState({});
    const { register, handleSubmit} = useForm();
    const {id} = useParams();
    const {user} = useAuth();
    const {handleBookingPost, resetForm, setResetForm} = useDatabase();

    
    useEffect(()=> {
        axios.get(`https://tourism-server-by-mominur.herokuapp.com/destinations/${id}`)
        .then(result => setDestination(result.data))
    }, []);
    const onSubmit = data => {
        data.email = user.email;
        handleBookingPost(data)
       };

       if(resetForm){
        
        setTimeout(()=>{
            setResetForm(false);
        }, 2000)
       }

    return (
        <div className="container mt-5">
           <div className="row">
               <div className="col-md-9">
                   <div className=" p-4">
                    <h1>Tour Details</h1>
                    {resetForm ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Destination Added</strong>
                        </div>: ''}
                    <div className="row">
                        <div className="col-md-8">
                            <img className="w-100 rounded" src={destination.imgUrl} alt={destination.title} />

                        </div>
                        <div className="col-md-4">
                            <div className="mt-3">
                                <div></div>
                                <h4>{destination.title}</h4>
                                <p>{destination.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fw-bold text-brand fs-3">{destination.cost}</span>
                                    <span className="text-brand duration"><i className="far fa-clock"></i> {destination.duration}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="shadow p-3">
                    <h1>Book Tour</h1>
                    {
                        destination._id 
                        ? 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                            <div className="col-md-12">
                                <input className="form-control" placeholder="Name" {...register("name", { required: true })} />
                                <input className="form-control" type="hidden" {...register("des_id", { required: true })} value={destination._id} />
                                
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="email" placeholder="Email" {...register("email", { required: true })} value={user.email} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" placeholder="Phone" {...register("phone", { required: true })} />
                            </div>
                            <div className="col-md-12 mt-3">
                                <textarea className="form-control" placeholder="Address" {...register("address", { required: true })} />
                            </div>

                            </div>
                            
                            <input type="submit" className="button-brand mt-4" value="Book"/>
                        </form>
                        :
                        <div className="text-center mt-5"><Spinner animation="border" variant="dark" /></div>
                    }
                   </div>
               </div>
           </div>
        </div>
    );
};

export default DestinationDetails;