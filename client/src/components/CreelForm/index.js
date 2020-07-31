import React from "react";
import "./style.css";
import { Form, Button, InputGroup, Col } from 'react-bootstrap';

function CreelForm() {
    return (
        <Form>
            <Form.Group controlId="creelInputForm" className="justify-content-center">
                <InputGroup size="lg" className="input-group">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" className="form-label text-center">Species</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="what kind of rock fish did you catch?"
                        aria-describedby="inputGroupPrepend"
                        name="species"
                        id="creel-species-input"
                        className="creel-input"
                    />
                </InputGroup>
                <InputGroup size="lg" className="input-group">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" className="form-label">Length</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="how long is yours?"
                        aria-describedby="inputGroupPrepend"
                        name="length"
                        id="creel-length-input"
                        className="creel-input"
                    />
                </InputGroup>
                <InputGroup size="lg" className="input-group">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" className="form-label">Date caught</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="date"
                        placeholder="mm/dd/yyyy"
                        aria-describedby="inputGroupPrepend"
                        name="date"
                        id="creel-date-input"
                        className="creel-input"
                    />
                </InputGroup>
                <InputGroup size="lg" className="input-group">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend" className="form-label">Location caught</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="where did you catch it?"
                        aria-describedby="inputGroupPrepend"
                        name="location"
                        id="creel-location-input"
                        className="creel-input"
                    />
                </InputGroup>
            </Form.Group>






{/* 
            <Form.Group controlId="creelForm">
                <Form.Label className="input-group-append" id="creel-species inputGroup-sizing-sm">Species</Form.Label>
                <Form.Control type="text" placeholder="what kind of rockfish did you catch?" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button> */}
        </Form>


        // <form className="col-6 text-center float-left">
        //     <h5 className='card-title creel text-center '>
        //         Enter Rockfish data.
        //     </h5>
            // <div className="input-group mb-3">
            //     <div className="input-group-append creel-input-label">
            //         <span className="input-group-text creel" id="creel-species inputGroup-sizing-sm">Species</span>
            //     </div>
            //     <input type="text" className="form-control" placeholder="what kind of rockfish did you catch?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            // </div>
        //     <div className="input-group mb-3">
        //         <div className="input-group-append creel-input-label">
        //             <span className="input-group-text creel" id="creel-length inputGroup-sizing-sm">Length</span>
        //         </div>
        //         <input type="text" className="form-control" placeholder="how long is yours?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
        //     </div>
        //     <div className="input-group mb-3">
        //         <div className="input-group-append creel-input-label">
        //             <span className="input-group-text creel" id="creel-date inputGroup-sizing-sm">Date caught</span>
        //         </div>
        //         <input type="text" className="form-control" placeholder="mm/dd/yyyy" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
        //     </div>
        //     <div className="input-group mb-3">
        //         <div className="input-group-append creel-input-label">
        //             <span className="input-group-text creel" id="creel-location inputGroup-sizing-sm">Location caught</span>
        //         </div>
        //         <input type="text" className="form-control" placeholder="where did you find that?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
        //     </div>
        //     <button type="submit" className="btn add-btn btn-primary">Add</button>
        //     <br></br>
        //     <button className="btn update-btn mb-3 mt-2 mr-3 bg-info">Update</button>
        //     <button className="btn delete-btn mb-3 mt-2 bg-danger">Delete</button>
        // </form>
    );
}

export default CreelForm;
