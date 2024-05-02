import React from 'react';

const Card = ({ image, title }) => {
    return (
        <div className='card' style={{ backgroundImage: `url(${image})` }}>
            <h2 className='card-title'>{title}</h2>
        </div>
    );
};

export default Card; 