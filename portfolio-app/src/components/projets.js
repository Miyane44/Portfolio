import React from 'react';

import projetsListe from './../projets.json';
import Card from './card';
import './styles/projets.scss';

function Projets() {
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
                        difficultes={e.difficultes}
                        tags={e.tags}
                        github={e.github}
                        imageSite={e.imageSite}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projets;