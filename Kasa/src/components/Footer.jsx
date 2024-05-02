import React from "react";
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="{logo}" alt="Logo Kasa" />
                <p>© 2024 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;