import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const [destination, setDestination] = useState({});
    const {id} = useParams();
    useEffect(()=> {
        axios.get(`http://localhost:5000/destinations/${id}`)
        .then(result => setDestination(result.data))
    })
    return (
        <div>
            <h1> {destination.title}</h1>
        </div>
    );
};

export default DestinationDetails;