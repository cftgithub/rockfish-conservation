import React, { Component } from "react";

class Creel extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Creel Page</h1>
        <h4 className='text-center mb-3'>
          Track your catches to help scientists monitor wild populations.
        </h4>
        <div className='card col-6 text-center float-left'>
          <div className='card-body text-center'>
            <h5 className='card-title text-center '>Enter Rockfish data.</h5>
            <p className='card-text'></p>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroup-sizing-sm'>
                Species
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'></input>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroup-sizing-sm'>
                Length
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'></input>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroup-sizing-sm'>
                Date Caught
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'></input>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroup-sizing-sm'>
                Location Caught
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'></input>
            <button>Add</button>
            <br></br>
            <button className='mb-5'>Update</button>
            <button className='mb-5'>Delete</button>
          </div>
        </div>
        <div className='card col-6 text-center float-left'>
          <div className='card-body text-center'>
            <h5 className='card-title text-center '>Enter Rockfish data.</h5>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Creel;
