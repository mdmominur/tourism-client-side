import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddDestination from '../AddDestination/AddDestination';
import Destinations from '../Destinations/Destinations';
import Main from '../Main/Main';
import ManageBookings from '../ManageBookings/ManageBookings';
import MyBookings from '../MyBookings/MyBookings';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
                    <div className="container mt-4">
                        <div className="row flex-nowrap">
                            <BrowserRouter>
                                <Sidebar></Sidebar>
                                <Switch>
                                    <Route exact path="/dashboard">
                                        <Main></Main>
                                    </Route>
                                    <Route path="/dashboard/destinations">
                                        <Destinations></Destinations>
                                    </Route>
                                    <Route path="/dashboard/myBookings">
                                        <MyBookings></MyBookings>
                                    </Route>
                                    <Route path="/dashboard/manageBookings">
                                        <ManageBookings></ManageBookings>
                                    </Route>
                                    <Route path="/dashboard/createDestination">
                                        <AddDestination></AddDestination>
                                    </Route>
                                </Switch>
                            </BrowserRouter>
                           
                        </div>
                    </div>
            
        </div>
    );
};

export default Dashboard;