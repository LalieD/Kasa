import React from 'react';
import '../styles/NotFound.scss'

function NotFound () {
    return (
        <div className='not-found'>
            <h1 className='title-not-found'>404</h1>
            <p className='missing-page'>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className='return-home'>Retourner sur la page d'accueil</a> 
        </div>
    );
}

export default NotFound;