import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import '../styles/About.scss';

function About() {
    return (
        <div>
            <Banner backgroundImage="/assets/imgapropos.png" />
            <div className='totals-collapse'>
                <Collapse headerText="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </Collapse>
                <Collapse headerText="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse headerText="Service">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse headerText="Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>

            </div>
        </div>
    );
}

export default About;