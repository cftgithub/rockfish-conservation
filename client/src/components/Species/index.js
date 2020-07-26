import React, { Component } from "react";
// import Modal from "../Modal";
import "./style.css";
import fish from "../../fish.json";

class Species extends Component {
state={
    fish,
    modalIdTag: 0,
    modalTitle: "",
    sciName: "",
    location: "",
    biology: ""
}

// handleClick = () => {
//     this.props.onClick(this.props.id)
//   };

modalId = () => {
    this.setState({ modalIdTag: this.props.id });
    this.setState({ modalTitle: this.props.title });
    this.setState({ sciName: this.props.sciName });
    this.setState({ location: this.props.location });
    this.setState({ biology: this.props.biology });
  };

render() {
    return (
        <>
            <div className="card species-card">
                <div className="img-card">

                    <img className="fish" alt={this.props.name} src={this.props.image} />

                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>{this.props.name}</strong>
                        </li>
                        <li>
                            <em>{"Status: " + this.props.status}</em>
                        </li>
                    </ul>
                </div>
                {/* <Modal /> */}

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#infoModal" onClick={this.modalId}>
                    Learn More</button>
            </div>
            <div>
                <p>{this.state.modalTitle}</p>
                <p>{this.state.sciName}</p>
                <p>{this.state.location}</p>
                <p>{this.state.biology}</p>
            </div>
                <div className="modal fade" id="infoModal" tabIndex="-1" role="dialog" aria-labelledby="fishModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fishModalTitle">{this.state.modalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">

                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.sciName +
                                    this.state.location +
                                    this.state.biology}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
}
}

export default Species;
