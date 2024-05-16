import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import jsonData from '../data/data.json';
import '../styles/Logement.scss';
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import Tag from '../components/Tag';

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
            <div className='host-infos'>
                <p className='host-name'>{logement.host.name}</p>
                <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} className='host-picture' />
            </div>
            <p className='logement-location'>{logement.location}</p>
            
            <div className='tags-container'>
                {logement.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>

            <Stars rating={parseInt(logement.rating)}/>
            
            <div className='description-equipments'>
                <Collapse headerText="Description">
                    <p className='description-logement'>
                        {logement.description}
                    </p>
                </Collapse>
                <Collapse headerText="Équipements">
                    <ul className='equipments-list'>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default Logement; 