import React, { Component } from "react";
import "./style.css";
import fish from "../../fish.json";
import { Modal } from 'react-bootstrap';

class Species extends Component {
    state = {
        show: false,
        fish,
        modalIdTag: 0,
        modalTitle: "",
        sciName: "",
        location: "",
        biology: "",
    }

    showModal = () => {
        this.setState({ show: true });
        this.setState({ modalIdTag: this.props.id });
        this.setState({ modalTitle: this.props.title });
        this.setState({ sciName: this.props.sciName });
        this.setState({ location: this.props.location });
        this.setState({ biology: this.props.biology });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

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
                    <button type="button" id="modalBtn" className="btn btn-primary" data-toggle="modal" data-target="#infoModal" onClick={this.showModal}>
                        Learn More</button>
                </div>
                <Modal show={this.state.show} onClick={this.hideModal}>
                    <Modal.Header id='ModalHeader' closeButton>
                        <Modal.Title id='ModalTitle'>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{this.props.sciName}</h5>
                        <h6>{this.props.location}</h6>
                        <p>{this.props.biology}</p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Species;
