import React, { Component } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/creels");
        }
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
        const userInfo = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        const errors = this.state.errors;

        return (
            <div>
                <div className='container creel'>
                    <h1 className='text-center'>Login</h1>
                    <h4 className='text-center mb-3'>
                        Login to track your catches in order to help scientists monitor wild populations.
                     </h4>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className='card col-6 text-center float-left'>
                        <div className='card-body creel text-center'>
                            <h5 className='card-title creel text-center '>Existing User Login</h5>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel'
                                    id='inputGroup-sizing-sm'>
                                    Username
                                </span>
                                <span className="red-text">
                                    {errors.username}
                                    {errors.usernotfound}
                                </span>
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.username}
                                error={errors.username}
                                type='text'
                                className={classnames("", {
                                    invalid: errors.username || errors.usernotfound
                                })}
                                id="uname"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'></input>
                            <div className='input-group-prepend'>
                                <span
                                    className='input-group-text creel mt-1'
                                    id='inputGroup-sizing-sm'>
                                    Password
                                </span>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                type='password'
                                className={classnames("", {
                                    invalid: errors.password || errors.passwordincorrect
                                })}
                                id="pword"
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'></input>
                            <button className='add-btn  bg-success' type="submit">Login</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);