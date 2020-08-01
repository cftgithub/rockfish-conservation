import React from "react";
import "./style.css";
import CreelForm from "../CreelForm";

function CreelCard(props) {
    return (
        <div className="card creel-card">
            <div className="card-body">
                <CreelForm />
                {/* <img src={props.image} alt={props.name}></img>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p> */}
            </div>
        </div>
    );
}

export default CreelCard;