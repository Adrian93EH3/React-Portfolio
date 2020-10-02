import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    // sets the click above to true by setting it to the opposite value in params
    const handleClick = () => setClick(!click)
    const closeHamburgerMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/">
                        Home
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* toggles between hamburger and bars for the hamburger menu */}
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeHamburgerMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-links" onClick={closeHamburgerMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeHamburgerMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar