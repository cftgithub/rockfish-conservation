import React, { Component } from "react";
import API from "../../utils/API";
import { Player, ControlBar, LoadingSpinner } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import video from "../../assets/videos/video.mp4";
import Heading from "../../components/Header";

class LoginPage extends Component {
    signUp = () => {
        // API
    };

    render() {
        return (
            <>
                <div className='loginpage container-fluid p-0 text-center'>
                    <Player autoPlay loop muted playsInline src={video}>
                        <ControlBar disabled />
                        <LoadingSpinner disabled />
                    </Player>
                </div>
                <div className='col-lg-12 col-md-auto p-0 d-flex justify-content-center text-center cards'>
                    <div className='container-fluid login-box'>
                        <Heading
                            title="Sign In"
                            subtitle="Login to track your catches in order to help scientists monitor wild populations."
                        />
                        <div className="row">
                            <div className='card col-6 text-center float-left'>
                                <div className='card-body creel text-center'>
                                    <h5 className='card-title creel text-center '>
                                        Create New Account
                                    </h5>
                                    <p className='card-text'></p>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label'
                                            id='inputGroup-sizing-sm'>
                                            First Name
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="fname"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label mt-1'
                                            id='inputGroup-sizing-sm'>
                                            Last Name
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="lname"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label mt-1'
                                            id='inputGroup-sizing-sm'>
                                            Username
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="newUname"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label mt-1'
                                            id='inputGroup-sizing-sm'>
                                            Password
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="newPword"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <br></br>
                                    <button className='add-btn bg-success' id="signBtn">Sign Up</button>
                                </div>
                            </div>
                            <div className='card col-6 text-center float-right'>
                                <div className='card-body creel text-center'>
                                    <h5 className='card-title creel text-center '>Existing User Login</h5>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label'
                                            id='inputGroup-sizing-sm'>
                                            Username
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="uname"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <div className='input-group-prepend'>
                                        <span
                                            className='login-input-label mt-1'
                                            id='inputGroup-sizing-sm'>
                                            Password
                                        </span>
                                    </div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id="pword"
                                        aria-label='Small'
                                        aria-describedby='inputGroup-sizing-sm'></input>
                                    <button className='add-btn  bg-success'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage;
