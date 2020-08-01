import React from "react";
import "./style.css";

function Heading(props) {
    return (
        <div className="row">
            <div className="col-12 justify-content-center header-box">
                <h1 className="title">{props.title}</h1>
                <h5 className="subtitle">{props.subtitle}</h5>
            </div>
        </div>
    );
}

export default Heading;