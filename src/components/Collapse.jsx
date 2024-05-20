import React, { useState, useRef, useEffect } from 'react';
import '../styles/_collapse.scss';

const Collapse = ({ headerText, children, className = 'collapse-logement' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [isOpen, contentRef]);

    return (
        <div className={`collapse-global ${className}`}>
            <div className={`collapse ${isOpen ? 'open' : ''}`}>
                <div className="collapse-header" onClick={toggleCollapse}>
                    {headerText}
                    <img className={`collapse-arrow ${isOpen ? 'collapse-arrow-up' : 'collapse-arrow-down'}`} src="/assets/arrow_up.svg" alt="Arrow" />
                </div>
                <div className="collapse-content" ref={contentRef}>
                    <div className='collapse-content-inner'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;