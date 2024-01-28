import React from 'react';

import './styles/nav.scss';

function Nav() {
    return (
        <nav>
            <ul className='nav-list'>
                <li><a className='link' href='#a-propos'>À propos</a></li>
                <li><a className='link' href='#competences'>Mes compétences</a></li>
                <li><a className='link' href='#portfolio'>Mon portfolio</a></li>
                <li><a className='link' href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;