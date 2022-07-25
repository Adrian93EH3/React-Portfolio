import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    // sets the click above to true by setting it to the opposite value in params
    const handleClick = () => setClick(!click)

    // sets the click to false so it turns true upon clicking
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href="https://www.linkedin.com/in/adrian-diaz-81044a1aa/" target="_blank" rel="noopener noreferrer" className='navbar-logo' onClick={closeMobileMenu}>
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* Toggles between hamburger and X upon clicking  */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* Toggles between showing the nav and not showing it  */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/home" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                             </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;