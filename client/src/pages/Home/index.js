import React, { Component } from "react";
import "./style.css";
import InfoCard from "../../components/InfoCard";
import { Player, ControlBar, LoadingSpinner } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import video from "../../assets/videos/video.mp4";

class Home extends Component {
    state = {
        
    };

    // Functions for home page

    render() {
        return (
        <>
            <div className="homepage container-fluid text-center">
                <Player
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={video}>
                    <ControlBar disabled />
                    <LoadingSpinner disabled />
                </Player>
            </div>
            <div className="col-lg-12 col-md-auto p-0 d-flex justify-content-center text-center cards">
                <InfoCard
                    title="What are rockfish?"
                    text="Rockfish are an important commercial and recreational fish family found in coastal waters from Japan to Mexico.
                    Known for their good taste, they were the Plan B for when the salmon fishery got depleted.  However, these fish have 
                    been undergoing rapid depletion over the past few decades, to the point that three species became federally listed 
                    as threatened or endangered."
                />
                <InfoCard
                    title="Why are they endangered?"
                    text="Their unique biology makes these fish more susceptible to overfishing.  It can take several years for these fish to 
                    reach sexual maturity.  This means that young fish are not able to replete fish populations fast enough to balance out 
                    fishing pressure. To make matters worse, these fish typically live on the ocean floor (hence the name 'rock' fish).  They live in such 
                    deep water that they experience barotrama when caught and pulled to the surface due to the drastic change in water 
                    pressure.  Therefore, if a threatened or endangered fish is accidentally caught, it cannot be released without dying...
                    until now!"
                />
                <InfoCard
                    title="What can I do to help?"
                    text="Effective catch-and-release methods have been discovered that greatly improve the likelihood of survival when releasing 
                    rockfish.  This allows for fishing regulations to be placed to control population dynamics in a way that promotes 
                    regeneration of depleted stocks.  But this only works if the people who are catching the rockfish know what they are doing.
                    That's what we're here for!"
                />
            </div>
        </>
        );
    }
}   

export default Home;