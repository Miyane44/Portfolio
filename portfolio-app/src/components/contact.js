import React from 'react';

import './styles/contact.scss';
import Nav from './nav';

function Contact() {
    return (
        <footer id='contact' className='footer'>
            <h2>Me contacter</h2>
            <span className='mail'>
                <i className='mail-icon fa-solid fa-envelope'></i>
                <a href="mailto:elodie-mouquet@orange.fr" className='mail-to'>elodie-mouquet@orange.fr</a>
            </span>
        </footer>
    );
}

export default Contact;