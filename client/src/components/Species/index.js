import React from "react";
import "./style.css";

function Species(props) {
    return (
        <div className="card species-card">
            <div className="img-card" onClick={() => props.click(props.id)}>
                <img className="fish" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <em>{"Status: " + props.status}</em>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Species;
