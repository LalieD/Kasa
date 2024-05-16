import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../styles/Home.scss';
import jsonData from '../data/data.json';

const Home = () => {

    return (
        <div>
            <Banner backgroundImage="/assets/imgaccueil.png" text="Chez vous, partout et ailleurs" />
            <div className='cards-container'>
                {jsonData.map((card) => (
                    <Link key={card.id} to={`/logement/${card.id}`} style={{ textDecoration: 'none' }}>
                        <Card key={card.id} image={card.cover} title={card.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;