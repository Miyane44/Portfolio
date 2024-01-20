import React from "react";

import './styles/card.css';

function Card(props) {
    return (
      <div className="card">
        <div className="overlay"></div>
        <img src={props.image} alt="Illustration du projet"/>
        <span>{props.titre}</span>
    </div>
    );
}


export default Card;