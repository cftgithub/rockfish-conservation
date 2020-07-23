import React from "react";
import "./style.css";

function InfoCard(props) {
    return (
        <div className="card home-card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default InfoCard;
