import React from "react";
import "./style.css";

function InfoCard(props) {
    return (
        <div className="card info-card">
            <div className="card-body">
                <img src={props.image} alt={props.name}></img>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default InfoCard;
