import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src="/assets/desktop-logo.png" alt="Desktop Logo" className='logo desktop-logo'/>
                <img src="/assets/mobile-logo.png" alt="Mobile Logo" className="logo mobile-logo" />
            </div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;