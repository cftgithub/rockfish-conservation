import React from "react";
import "./style.css";

function SafeFishing(props) {
    return (
        <div className="card fishing-card">
            <div className="img-card" onClick={() => props.click(props.id)}>
                <img className="fishing" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.name}</strong>
                    </li>
                    <li>
                        <strong><em>{props.status}</em></strong>
                    </li>
                    <li>
                        {props.description}
                    </li>
<<<<<<< HEAD
                    {/* <li>
                        <em>{"Description: " + props.description}</em>
                    </li> */}
=======
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
                </ul>
            </div>
        </div>
    );
}

export default SafeFishing;
