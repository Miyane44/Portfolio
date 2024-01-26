import React, { useState } from "react";

import './styles/card.css';
import Modal from "./modal";

function Card(props) {
    const [modalShow, setModalShow] = useState(false);
    const showModal = (event) => {
        setModalShow(true);
        event.preventDefault();
      };
    
    const hideModal = () => {
        setModalShow(false);
      };
    return (
        <div className="card">
            <a onClick={(event) => showModal(event)}>
                <div className="overlay">
                    <div className="text">Détails</div>
                </div>
                <img src={props.image} alt="Illustration du projet"/>
                <span className="card-title">{props.titre}</span>
            </a>
            <Modal 
                show={modalShow} 
                onHide={() => hideModal()}
                title={props.titre}
                description={props.description}
                competences={props.competences}
                tags={props.tags}
                difficultes={props.difficultes}
                image={props.imageSite}
                github={props.github}
            />
        </div>
    );
}


export default Card;