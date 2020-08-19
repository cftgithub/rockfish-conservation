import React from "react";
import "./style.css";
import { Form, InputGroup } from 'react-bootstrap';

function CreelForm() {
    return (
<<<<<<< HEAD
        <Form>
            <Form.Group controlId="creelInputForm">
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
        </Form>
=======
      <Form>
        <Form.Group controlId='creelInputForm'>
          <InputGroup size='lg' className='input-group'>
            <InputGroup.Prepend>
              <InputGroup.Text
                id='inputGroupPrepend'
                className='form-label text-center'>
                Species
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='text'
              placeholder='what kind of rock fish did you catch?'
              aria-describedby='inputGroupPrepend'
              name='species'
              className='creel-input'
              onChange={props.onChange}
            />
          </InputGroup>
          <InputGroup size='lg' className='input-group'>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend' className='form-label'>
                Length (inches)
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='text'
              placeholder='how long is your fish?'
              aria-describedby='inputGroupPrepend'
              name='length'
              className='creel-input'
              onChange={props.onChange}
            />
          </InputGroup>
          <InputGroup size='lg' className='input-group'>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend' className='form-label'>
                Date caught
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='date'
              placeholder='mm/dd/yyyy'
              aria-describedby='inputGroupPrepend'
              name='date'
              className='creel-input'
              onChange={props.onChange}
            />
          </InputGroup>
          <InputGroup size='lg' className='input-group'>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend' className='form-label'>
                Location caught
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='text'
              placeholder='where did you catch it?'
              aria-describedby='inputGroupPrepend'
              name='location'
              className='creel-input'
              onChange={props.onChange}
            />
          </InputGroup>
        </Form.Group>
      </Form>
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
    );
}

export default CreelForm;
