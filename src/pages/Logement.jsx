import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import jsonData from '../data/data.json';
import '../styles/Logement.scss'

const Logement = () => {
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return ( 
        <div className='global-logement'>
            <Slideshow images={logement.pictures} />
            <h1 className='title-logement'>{logement.title}</h1>
            <p className='logement-location'>{logement.location}</p>
            <p>{logement.description}</p>
        </div>
    );
};

export default Logement; 