import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Header.css';
const Header = () => {
    const {user, logout} = useFirebase();
    return (
        <Navbar expand="lg" sticky="top" bg="white">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-1 text-brand-secondary">Fantastic <span className="text-brand fs-3">Journeys</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0 d-flex aligh-items-center h-100 bg-red"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={NavLink} className="fw-bold" activeClassName="active" exact to="/">Home</Nav.Link>
                   
                    {
                        user.email ? <><Nav.Link as={NavLink} className="fw-bold" activeClassName="active" to="/dashboard">Dashboard</Nav.Link> <button className="ms-3 button-brand" onClick={logout}>Logout</button> </> : <Nav.Link as={NavLink} className="fw-bold" activeClassName="active" to="/login">Login</Nav.Link>
                    }
                    
                    
                    
                </Nav>
        
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;