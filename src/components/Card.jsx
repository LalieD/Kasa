import React from 'react';

const Card = ({ image, title, link }) => {
    return (
        <div className="card-container"> 
            <div className='card' style={{ backgroundImage: `url(${image})` }}>
                <h2 className='card-title'>{title}</h2>
            </div>
        </div>
    );
};

export default Card;