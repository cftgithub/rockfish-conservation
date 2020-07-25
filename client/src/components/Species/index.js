import React from "react";
// import Modal from "../Modal";
import "./style.css";

function Species(props) {
    return (
        <>
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
                {/* <Modal /> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Learn More</button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">{props.title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {props.sciName +
                                    props.location +
                                    props.biology}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Species;
