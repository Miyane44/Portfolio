import React from 'react';

import logosFront from './../assets/front-end.webp';
import './styles/competences.scss';

function Competences() {
    return (
        <div id='competences' className='competences'>
            <h2 className='title'>Compétences</h2>
            <div className='mes-competences'>
				<div className='front'>
					{/* <h3>Front-end</h3> */}
					<i className='icon blue fa-solid fa-computer'></i>
					<ul className='competences-list'>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Angular</li>
						<li>Typescript</li>
						<li>Responsive Design</li>
						<li>Débogage</li>
						<li>Tests</li>
					</ul>
				</div>
				<div className='back'>
					{/* <h3>Back-end</h3> */}
                    <div className='tags'>
                        <i className='icon grey fa-solid fa-server'></i>
                        <i className='icon grey fa-solid fa-database'></i>
                    </div>
					<ul className='competences-list'>
						<li>Node.js</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>Java</li>
						<li>Création et utilisation d'APIs</li>
						<li>Débogage</li>
						<li>Tests</li>
					</ul>
				</div>
				<div className='tools'>
					{/* <h3>Outils</h3> */}
					<i className='icon blue fa-solid fa-screwdriver-wrench'></i>
					<ul className='competences-list'>
						<li>Git</li>
						<li>GitHub</li>
						<li>Npm</li>
						<li>Visual Studio Code</li>
						<li>IntelliJ Idea</li>
						<li>Swagger</li>
						<li>Postman</li>
						<li>Trello</li>
						<li>Figma</li>
					</ul>
				</div>
			</div>
        </div>
    );
}

export default Competences;