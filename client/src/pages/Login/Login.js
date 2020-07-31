import React, { Component } from "react";
import API from "../../utils/API";

class Login extends Component {
    state = {
        catches: [],
        species: "",
        length: 0
    };

    signUp = () => {
        // API
    };

    deleteCreel = (id) => {
        API.deleteCreel(id)
            .then((res) => this.loadCatches())
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                <div className='container creel'>
                    <h1 className='text-center'>Sign In</h1>
                    <h4 className='text-center mb-3'>
                        Login to track your catches in order to help scientists monitor wild populations.
                     </h4>
                    <div className='card col-6 text-center float-left'>
                        <div className='card-body creel text-center'>
                            <h5 className='card-title creel text-center '>
                                Create New Account
                            </h5>
                            <p className='card-text'></p>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel'
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
                                    className='input-group-text creel mt-1'
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
                                    className='input-group-text creel mt-1'
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
                                    className='input-group-text creel mt-1'
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
                    <div className='card col-6 text-center float-left'>
                        <div className='card-body creel text-center'>
                            <h5 className='card-title creel text-center '>Existing User Login</h5>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel'
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
                                    className='input-group-text creel mt-1'
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
        );
    }
}

export default Login;
