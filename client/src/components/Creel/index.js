import React, { Component } from "react";
import "./style.css";


class Creel extends Component {

  render() {
    return (
      <div className='creelpage'>
        <div className='container creel'>
          <h1 className='text-center'>Creel Page</h1>
          <h4 className='text-center mb-3'>
            Track your catches to help scientists monitor wild populations.
          </h4>
          <div className='card col-6 text-center float-left'>
            <div className='card-body creel text-center'>
              <h5 className='card-title creel text-center '>
                Enter Rockfish data.
              </h5>
              <p className='card-text'></p>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel'
                  id='inputGroup-sizing-sm'>
                  Species
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel'
                  id='inputGroup-sizing-sm'>
                  Length
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel'
                  id='inputGroup-sizing-sm'>
                  Date Caught
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel'
                  id='inputGroup-sizing-sm'>
                  Location Caught
                </span>
              </div>

              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <br></br>
              <button className='add-btn  bg-success'>Add</button>
              <br></br>
              <button className='update-btn mb-3 mr-3 bg-info'>Update</button>
              <button className='delete-btn mb-3 mt-2 bg-danger'>Delete</button>
            </div>
          </div>
          <div className='card col-6 text-center float-left'>
            <div className='card-body creel text-center'>
              <h5 className='card-title creel text-center '>
                Enter Rockfish data.
              </h5>
              <p className='card-text'></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creel;
