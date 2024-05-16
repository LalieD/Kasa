import React from "react";
import '../styles/Tag.scss';


const Tag = ({ tag }) => {
    return (
        <div className="tag">{tag}</div>
    );
};

export default Tag;