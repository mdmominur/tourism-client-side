import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = ({destination}) => {
    const {_id, title, duration, description, cost, imgUrl} = destination;
    return (
        <Col>
        <Card className="shadow">
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body className="p-4">
            <Card.Title className="d-flex justify-content-between">{title} <span className="text-brand"><i class="far fa-clock"></i> {duration}</span></Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-brand fs-3">{cost}</span>
                <Link to={`/destinationDetails/${_id}`}>
                <button className="button-brand mt-3" >Book Now</button>
                </Link>
            </div>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Destination;