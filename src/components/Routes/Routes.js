import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import MainPage from '../MainPage/MainPage';
import Portfolio from '../Portfolio/Portfolio';

function routes() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={MainPage} />
                <Route exact path='/portfolio' component={Portfolio}/>
            </div>
        </Router>
    )
};

export default routes;