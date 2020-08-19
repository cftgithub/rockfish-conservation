import React, { Component } from "react";
import { Modal, Button, Card } from 'react-bootstrap';
import fish from "../../fish.json";
import "./style.css";

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

<<<<<<< HEAD
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
                    fdafdsafadfas
                    <ul>
                        <li>
                            <strong>{this.props.name}</strong>
                        </li>
                        <li>
                            <em>{"Status: " + this.props.status}</em>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#infoModal" onClick={this.showModal}>
                    Learn More</button>
            </div>
            <Modal show={this.state.show} onClick={this.hideModal}>
                <div id="title">{this.state.title}</div>
                <Modal.Header closeButton>Test</Modal.Header>
                <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
                {this.state.sciName}<br />
                {this.state.location}<br />
                {this.state.biology}
            </Modal>
=======
    render() {
        return (
            <>
                <Card className="card species-card">
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
                    <Button type="button" id="modalBtn" variant="info" data-toggle="modal" data-target="#infoModal" onClick={this.showModal}>
                        Learn More</Button>
                </Card>
                <Modal centered show={this.state.show} onClick={this.hideModal}>
                    <Modal.Header id='modalHeader' closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id='modalBody'>
                        <h5>{this.props.sciName}</h5>
                        <h6>{this.props.location}</h6>
                        <p>{this.props.biology}</p>
                    </Modal.Body>
                </Modal>
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
            </>
        );
    }
}

export default Species;
