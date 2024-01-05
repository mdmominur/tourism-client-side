import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './WhyUs.css';
const WhyUs = () => {
    const [services, setServices] = useState([]);
        //Services
        useEffect(()=>{
            axios.get('https://tourism-api.mominur.net/services')
            .then(res => setServices(res.data));
        }, []);
    return (
        
        <div className="why-us container-fluid py-5 mt-5">
            <div className="container">
                <h1 className="text-center text-brand-secondary display-3 fw-bold uppercase">Why Us</h1>
                <div>
                    <div className="row mt-5">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyUs;