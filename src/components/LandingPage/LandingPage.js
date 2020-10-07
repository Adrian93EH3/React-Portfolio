import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

function LandingPage() {  
    return (
        <div>
            <div className="wrapper">
                <div className="masthead">
                    <div className="content">
                        <h1>Adrian Diaz</h1>
                        <h3>Full Stack Web Developer</h3>
                        <Link to="/home" className="button">START!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;