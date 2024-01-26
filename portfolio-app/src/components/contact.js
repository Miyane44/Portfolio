import React from 'react';

import './styles/contact.css';
import Nav from './nav';

function Contact() {
    return (
        <footer id='contact' className="footer">
            <h2>Me contacter</h2>
            <span className='mail'><i className="mail-icon fa-solid fa-envelope"></i>elodie-mouquet@orange.fr</span>
            <Nav/>
        </footer>
    );
}

export default Contact;