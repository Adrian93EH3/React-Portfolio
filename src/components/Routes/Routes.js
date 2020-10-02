import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';

const routes = () => {
    return (
        <Router>
            <div>
                <Route exact path='/home' component={Navbar} />
                <Route exact path='/' component={LandingPage} />
            </div>
        </Router>
    )
};

export default routes;