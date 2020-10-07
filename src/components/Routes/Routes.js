import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import MainPage from '../MainPage/MainPage';

function routes() {
    return (
        <Router>
            <div>
                <Route exact path='/home' component={MainPage} />
                <Route exact path='/' component={LandingPage} />
            </div>
        </Router>
    )
};

export default routes;