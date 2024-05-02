import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src="/assets/logo.png" alt="Logo Kasa" />
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;