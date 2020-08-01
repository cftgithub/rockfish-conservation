import React, { Component } from "react";
// import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    state = {
        username: "",
        password: "",
        password2: "",
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

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
        this.props.registerUser(newUser, this.props.history); 
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
                                    <span className="red-text">{errors.newUsername}</span>
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.newUsername}
                                error={errors.newUsername}
                                type='text'
                                className={classnames("", {
                                    invalid: errors.newUsername
                                    })}  
                                id="newUsername"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'>
                            </input>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel mt-1'
                                    id='inputGroup-sizing-sm'>
                                    Password
                                </span>
                                    <span className="red-text">{errors.newpassword}</span>
                            </div>
                            <input
                                onChange={this.onChange}
                                    value={this.state.newpassword}
                                    error={errors.newpassword}
                                type='password'
                                className={classnames("", {
                                    invalid: errors.newpassword
                                    })}  
                                id="newpassword"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'></input>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel mt-1'
                                    id='inputGroup-sizing-sm'>
                                    Confirm Password
                                </span>
                                    <span className="red-text">{errors.confPassword}</span>
                            </div>
                            <input
                                onChange={this.onChange}
                                    value={this.state.confPassword}
                                    error={errors.confPassword}
                                type='password'
                                className={classnames("", {
                                    invalid: errors.confPassword
                                    })} 
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));