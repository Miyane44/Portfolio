import React from 'react';

import './styles/page-header.css';

function PageHeader() {
    return (
        <header className="header">
        <h1>Portfolio</h1>
        <nav>
            <ul className='nav-list'>
                <li><a className='link' href='#a-propos'>À propos</a></li>
                <li><a className='link' href='#competences'>Mes compétences</a></li>
                <li><a className='link' href='#portfolio'>Mon portfolio</a></li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
    );
}

export default PageHeader;