import React from "react";
import "./style.css";

function CreelForm() {
    return (
        <form>
            <div className="form-group">
                <label for="creel-species">Species</label>
                <input type="text" className="form-control" id="creel-species" aria-describedby="creel-species" placeholder="Species"></input>
            </div>
            <div className="form-group">
                <label for="creel-length">Length</label>
                <input type="text" className="form-control" id="creel-length" aria-describedby="creel-length" placeholder="Length"></input>
            </div>
            <div className="form-group">
                <label for="creel-date">Date caught</label>
                <input type="text" className="form-control" id="creel-date" aria-describedby="creel-date" placeholder="Date caught"></input>
            </div>
            <div className="form-group">
                <label for="creel-location">Location caught</label>
                <input type="text" className="form-control" id="creel-location" aria-describedby="creel-location" placeholder="Location caught"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default CreelForm;
