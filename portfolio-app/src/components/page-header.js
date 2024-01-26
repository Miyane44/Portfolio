import React from 'react';

import './styles/page-header.css';
import Nav from './nav';

function PageHeader() {
    return (
        <header className="header">
        <h1>Portfolio</h1>
        <Nav/>
      </header>
    );
}

export default PageHeader;