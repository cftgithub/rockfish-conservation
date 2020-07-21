import React from "react";
import "./style.css";
import InfoCard from "../../components/InfoCard";

function Home() {
   return (
        <div className="home-page container-fluid text-center">
            <h1 className="page-title">ROCKFISH CONSERVATION</h1>
            <div className="text-box">
                <div class="row">
                    <div class="col-lg-4">
                        <p>{InfoCard}</p>
                    {/* <p>Why rockfish rock!</p> */}
                    </div>
                    <div class="col-lg-4">
                    <p>Why our cause rocks!</p>
                    </div>
                    <div class="col-lg-4">
                    <p>What are we doing for our rockin' awesome cause?</p>
                    </div>
                </div>
            </div>
        </div>
   );
}

export default Home;