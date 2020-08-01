import React, { Component } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        username: "",
        password: "",
        password2: "",
        errors: {}
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        const errors = this.state.errors;

        return (
            <div>
                <div className='container creel'>
                    <h1 className='text-center'>Sign Up</h1>
                    <h4 className='text-center mb-3'>
                        Create a new account to track your catches in order to help scientists monitor wild populations.
                     </h4>
                <form noValidate onSubmit={this.onSubmit}>
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
                                    Username
                                </span>
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.username}
                                error={errors.username}
                                type='text'
                                className='form-control'
                                id="newUsername"
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
                                onChange={this.onChange}
                                value={this.password}
                                error={errors.password}
                                type='password'
                                className='form-control'
                                id="newpassword"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'></input>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel mt-1'
                                    id='inputGroup-sizing-sm'>
                                    Confirm Password
                                </span>
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.password2}
                                error={errors.password2}
                                type='password'
                                className='form-control'
                                id="confPassword"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'></input>
                            <br></br>
                            <button className='add-btn bg-success' type="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Register;
