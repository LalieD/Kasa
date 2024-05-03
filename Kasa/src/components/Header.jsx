import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src="/assets/logo.png" alt="Logo Kasa" />
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