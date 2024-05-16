import React from "react";
import '../styles/Stars.scss';

const Stars = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? "/assets/filled_star.svg" : "/assets/empty_star.svg"}
                alt="star"
                className="star"            
            />
        );
    }

    return <div className="stars">{stars}</div>;
};

export default Stars;