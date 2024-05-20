import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import jsonData from '../data/data.json';
import '../styles/Logement.scss';
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import Tag from '../components/Tag';

const Logement = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const logement = jsonData.find(item => item.id === id);

    if (!logement) {
        useEffect(() => {
            navigate('*');
        }, []);

        return null;
    }

    return ( 
        <div className='global-logement'>
            <Slideshow images={logement.pictures} />
            <div className='logement-header'>
                <h1 className='title-logement'>{logement.title}</h1>
                <p className='logement-location'>{logement.location}</p>
            </div>
                
            <div className='tags-stars-host'>
                <div className='tags-container'>
                    {logement.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
                <div className='stars-host-container'>
                    <div className='stars-container'>
                        <Stars rating={parseInt(logement.rating)}/>
                    </div>
                    <div className='host-info'>
                        <div className='host-name-container'>
                            <p className='host-name'>{`${logement.host.name.split(' ')[0]}\n${logement.host.name.split(' ').slice(1).join(' ')}`}</p>
                        </div>
                        <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} className='host-picture' />
                    </div>
                </div>
            </div> 
            
            <div className='description-equipments'>
                <Collapse className='collapse-logement collapse-logement-description' headerText="Description">
                    <p className='description-logement'>
                        {logement.description}
                    </p>
                </Collapse>
                <Collapse className='collapse-logement' headerText="Équipements">
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