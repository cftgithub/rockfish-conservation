import React from "react";
import "./style.css";

function Heading(props) {
    return (
        <div className="hero header-box text-center">
            <h1 className="title">{props.title}</h1>
            <h5 className="subtitle">{props.subtitle}</h5>
        </div>
    );
}

export default Heading;