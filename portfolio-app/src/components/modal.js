import React from "react";

import "./styles/modal.scss";
import Tag from "./tag";

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-header">
                    <h2>{props.title}</h2>
                    <button className="modal-close" type="button" onClick={props.onHide}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="projet-main">
                    <div className="projet">
                        <div className="projet-infos">
                            <div className="info-projet">
                                <h4 className="info-title">Description du projet :</h4>
                                <span>{props.description}</span>
                            </div>
                            <div className="info-projet">
                                <h4 className="info-title">Compétences développées :</h4>
                                <ul className="info-list">
                                    {props.competences.map((competence, index) => (
                                        <li key={index}>- {competence}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tags info-projet">
                                {props.tags.map((tag, index) => (
                                    <Tag key={index} label={tag}/>
                                ))}
                            </div>
                            <div className="info-projet">
                                <h4 className="info-title">Difficultés rencontrées : </h4>
                                <span>{props.difficultes}</span>
                            </div>
                            <div className="link-github">
                                <Tag label="Lien GitHub" link={props.github}/>
                            </div>
                        </div>
                        <div className="projet-image">
                            <div className="image">
                                <img loading="lazy" src={props.image}/>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </div>
        );
    };


export default Modal;