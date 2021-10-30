import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar rounded">
                                <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                                    <span className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                        <span className="fs-5 d-none d-sm-inline text-brand-secondary">Menu</span>
                                    </span>
                                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start menu" id="menu">
                                        <li className="nav-item">
                                            <NavLink to="/dashboard" exact className="nav-link text-white" activeClassName="active">
                                            <i className="fas fa-tachometer-alt"></i><span className="ms-1 d-none d-sm-inline text-brand">Dashboard</span>
                                            </NavLink>
                                            <NavLink to="/dashboard/destinations" className="nav-link text-white" activeClassName="active">
                                            <i className="fas fa-plane"></i> <span className="ms-1 d-none d-sm-inline text-brand">Destinaions</span>
                                            </NavLink>
                                            <NavLink to="/dashboard/myBookings" className="nav-link text-white" activeClassName="active">
                                            <i className="fas fa-bookmark"></i><span className="ms-1 d-none d-sm-inline text-brand">My Bookings</span>
                                            </NavLink>
                                            <NavLink to="/dashboard/manageBookings" className="nav-link text-white" activeClassName="active">
                                            <i className="fas fa-tasks"></i><span className="ms-1 d-none d-sm-inline text-brand">Manage Bookings</span>
                                            </NavLink>
                                           
                                        </li>
                                     
                                    </ul>
                                   
                                </div>
                            </div>
    );
};

export default Sidebar;