import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {  
    return (
        <div>
            <div className="wrapper">
                <div className="masthead">
                    <div className="content">
                        <h1>Adrian Diaz</h1>
                        <h3>Full Stack Web Developer</h3>
                        <Link to="/home" className="button">ENTER!</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default LandingPage;