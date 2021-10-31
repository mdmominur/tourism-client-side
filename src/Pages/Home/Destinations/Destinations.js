import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useDatabase from '../../../Hooks/useDatabase';
import Destination from '../Destination/Destination';
const Destinations = () => {
    const {destinations} = useDatabase();

    return (
        <div className="container pt-5">
            <h1 className="text-center text-brand mt-5">Destinations</h1>
            <Row xs={1} md={3} className="g-4 mt-3">
                {
                    destinations.length 
                    ? 
                    destinations.map(destination => <Destination destination={destination} key={destination._id}></Destination>
                    )
                    :<div className="text-center mt-5 w-100"><Spinner animation="border" variant="dark" /></div>
                }
            </Row>
        </div>
    );
};

export default Destinations;