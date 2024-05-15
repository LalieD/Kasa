import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, link }) => {
    return (
        <div className="card-container"> 
            <Link to={link} style={{ textDecoration: 'none', display: 'block' }}>
                <div className='card' style={{ backgroundImage: `url(${image})` }}>
                    <h2 className='card-title'>{title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Card;