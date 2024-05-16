import React, { useState } from 'react';
import '../styles/_slideshow.scss';

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <div className='slideshow-container'>
            {images.length > 1 && (
                <>
                    <button className='left-arrow' onClick={prevSlide}>
                        <img src="/assets/arrow_left.svg" alt="Précédent" />
                    </button>
                    <button className='right-arrow' onClick={nextSlide}>
                        <img src="/assets/arrow_right.svg" alt="Précédent" />
                    </button>
                </>
            )}
            <img src={images[currentSlide]} alt="Slide" />
        </div>
    );
};

export default Slideshow;