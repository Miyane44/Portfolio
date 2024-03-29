import React from 'react';

import photo from '../../src/assets/photo.jpg';
import '../components/styles/a-propos.scss';

function Apropos() {
    return (
        <div className='a-propos' id='a-propos'>
            <h2 className='name'>Elodie Mouquet - Développeuse Full Stack</h2>
            <img src={photo} className='photo' alt='Elodie Mouquet'/>
            <div className='texte'>
                <p>
                    Après plusieurs années à travailler dans des centres d'appels téléphonique dans le domaine des mutuelles santé,
                    j'ai décidé de <strong>changer de métier</strong>.
                </p>
                <p>
                    Ayant toujours été attirée par le <strong>domaine de l'informatique</strong>, j'ai décidé de me reconvertir dans le <strong>développement informatique</strong>.
                </p>
                <p>
                    J'ai donc suivi la <strong>formation Développeur Web d'Openclassrooms en alternance</strong>, pendant 1 an.
                </p>
                <p>
                    Lors de cette formation, j'ai pu acquérir plusieurs compétences.
                </p>
            </div>
        </div>
    );
}

export default Apropos;