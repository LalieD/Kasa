import React from 'react';

const Banner = ({ backgroundImage, text }) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <h1 className='banner-text'>{text}</h1>
        </div>
    );
};

export default Banner;