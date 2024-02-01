import React from "react";

import "./styles/modal.scss";
import Tag from "./tag";

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <div className='modal-header'>
                    <h2>{props.title}</h2>
                    <button className='modal-close' type="button" onClick={props.onHide}>
                        <i className='fa-solid fa-xmark'></i>
                    </button>
                </div>
                <div className='projet-main'>
                    <div className='projet'>
                        <div className='projet-infos'>
                            <div className='info-projet'>
                                <h3 className='info-title'>Description du projet :</h3>
                                <span>{props.description}</span>
                            </div>
                            <div className='info-projet'>
                                <h3 className='info-title'>Compétences développées :</h3>
                                <ul className='info-list'>
                                    {props.competences.map((competence, index) => (
                                        <li key={index}>- {competence}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='tags info-projet'>
                                {props.tags.map((tag, index) => (
                                    <Tag key={index} label={tag}/>
                                ))}
                            </div>
                            <div className='info-projet'>
                                <h3 className='info-title'>Difficultés rencontrées : </h3>
                                <span>{props.difficultes}</span>
                            </div>
                            <div className='tags'>
                                <div className='tag'>
                                    <span className='tag-title'>
                                        <a className='github-link' href={props.github} target='_blank'>
                                            <i className='fa-solid fa-arrow-up-right-from-square'></i>
                                            <span className='pl-5'>Lien Github</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='projet-image'>
                            <div className='image'>
                                <img loading="lazy" src={props.image} alt={'Illustration du projet ' + props.title}/>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </div>
        );
    };


export default Modal;