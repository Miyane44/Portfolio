import React, { useState } from "react";

import './styles/card.scss';
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
        <div className='card'>
            <a onClick={(event) => showModal(event)}>
                <div className='overlay'>
                    <span className='text'>Détails</span>
                </div>
                <img src={props.image} alt={'Illustration du projet ' + props.titre}/>
                <span className='card-title'>{props.titre}</span>
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