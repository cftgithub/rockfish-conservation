import React from "react";
import { Link } from "react-router-dom";

function InfoCard(props) {
    return (
        <div class="card text-ceneter">
            <img class="card-img-top" src="..." alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">Rockfish card</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default InfoCard;
