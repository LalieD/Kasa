import React, { useState } from 'react';
import '../styles/_collapse.scss';

const Collapse = ({ headerText, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse-global'>
            <div className={`collapse ${isOpen ? 'open' : ''}`}>
                <div className="collapse-header" onClick={toggleCollapse}>
                    {headerText}
                    <img className={`collapse-arrow ${isOpen ? 'collapse-arrow-up' : 'collapse-arrow-down'}`} src="/assets/arrow_up.svg" alt="Arrow" />
                </div>
                <div className="collapse-content" style={{ maxheight: isOpen ? '1000px' : '0px', padding: isOpen ? '10px' : '0px'}}>
                    <div className='collapse-content-inner'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;