import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useDatabase from '../../../Hooks/useDatabase';

const AddDestination = () => {
    const { register, handleSubmit, reset} = useForm();
    const {handleCreateDestinaitonPost, resetForm, setResetForm} = useDatabase();
    const onSubmit = data => {
     handleCreateDestinaitonPost(data);
    };

    useEffect(()=>{
        if(resetForm){
            reset();
            setTimeout(()=>{
                setResetForm(false);
            }, 3000);
        }
    },[resetForm]);
    return (
        <div className="col-md-9 ms-3 p-5 shadow-lg rounded">
            <header className="d-flex flex-wrap justify-content-between">
                <h1>Add Destinations</h1>
                <NavLink to="/dashboard/destinations" ><button className="button-brand">Destinations</button></NavLink>
            </header>
            {resetForm ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Destination Added</strong>
                    </div>: ''}
            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-md-6">
                    <input className="form-control" placeholder="Title" {...register("title", { required: true })} />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <input className="form-control" placeholder="Duration" {...register("duration", { required: true })} />
                </div>
                <div className="col-md-12 mt-3">
                    <textarea className="form-control" placeholder="Description" {...register("description", { required: true })} />
                </div>
                <div className="col-md-6 mt-3">
                    <input className="form-control" placeholder="Cost" {...register("cost", { required: true })} />
                </div>
                <div className="col-md-6 mt-3">
                    <input className="form-control" placeholder="Image Url" {...register("imgUrl", { required: true })} />
                </div>

                </div>
                
                <input type="submit" className="button-brand mt-4" />
                </form>
            </div>
        </div>
    );
};

export default AddDestination;