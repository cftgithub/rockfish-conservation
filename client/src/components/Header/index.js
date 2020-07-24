import React from "react";
import "./style.css";

function Heading(props) {
    return (
        <div className="hero">
            <h1 className="title"> {props.title} </h1>
        </div>
    );
}

export default Heading;