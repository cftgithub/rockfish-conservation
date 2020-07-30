import React from "react";
import "./style.css";

function CreelForm() {
    return (
        <form className="col-6 text-center float-left">
            <h5 className='card-title creel text-center '>
                Enter Rockfish data.
            </h5>
            <div className="input-group mb-3">
                <div className="input-group-append creel-input-label">
                    <span className="input-group-text creel" id="creel-species inputGroup-sizing-sm">Species</span>
                </div>
                <input type="text" className="form-control" placeholder="what kind of rockfish did you catch?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-append creel-input-label">
                    <span className="input-group-text creel" id="creel-length inputGroup-sizing-sm">Length</span>
                </div>
                <input type="text" className="form-control" placeholder="how long is yours?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-append creel-input-label">
                    <span className="input-group-text creel" id="creel-date inputGroup-sizing-sm">Date caught</span>
                </div>
                <input type="text" className="form-control" placeholder="mm/dd/yyyy" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-append creel-input-label">
                    <span className="input-group-text creel" id="creel-location inputGroup-sizing-sm">Location caught</span>
                </div>
                <input type="text" className="form-control" placeholder="where did you find that?" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <button type="submit" className="btn add-btn btn-primary">Add</button>
            <br></br>
            <button className="btn update-btn mb-3 mt-2 mr-3 bg-info">Update</button>
            <button className="btn delete-btn mb-3 mt-2 bg-danger">Delete</button>
        </form>
    );
}

export default CreelForm;
