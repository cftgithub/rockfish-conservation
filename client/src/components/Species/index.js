import React from "react";
// import Modal from "../Modal";
import "./style.css";

function Species(props) {
    return (
        <>
            <div className="card species-card">
                <div className="img-card">
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fishModal">
                    Learn More</button>

                <div class="modal fade" id="fishModal" tabindex="-1" role="dialog" aria-labelledby="fishModalTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="fishModalTitle">{props.title}</h5>
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
