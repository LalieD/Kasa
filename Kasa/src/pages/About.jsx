import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function About() {
    return (
        <div>
            <Banner backgroundImage="/assets/imgapropos.png" />
            <div>
                <Collapse headerText="Fiabilité">

                </Collapse>
                <Collapse headerText="Respect">

                </Collapse>
                <Collapse headerText="Service">

                </Collapse>
                <Collapse headerText="Sécurité">

                </Collapse>

            </div>
        </div>
    );
}

export default About;