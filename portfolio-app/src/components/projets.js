import React from 'react';

import projetsListe from './../projets.json';
import Card from './card';
import './styles/projets.css';

function Projets() {
    console.log(projetsListe);
    return (
        <div id='portfolio' className='portfolio'>
            <h2 className='title'>Portfolio</h2>
            <div className='gallery'>
                {projetsListe.map((e) => (
                    <Card 
                        key={e.id} 
                        titre={e.titre} 
                        description={e.description} 
                        image={e.imageUrl} 
                        competences={e.competences}
                        github={e.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projets;