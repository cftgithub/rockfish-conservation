import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./login.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confPassword: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/creel");
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors) {
            return { errors: nextProps.errors };
        }
        else return null;
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            confPassword: this.state.confPassword
        };
        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <h4>Create an account to track your catches and help scientists monitor fish populations!</h4>
                        <p>
                            Already have an account? <Link to="/login">Log in here!</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="redText">{errors.email}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password
                                })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="redText">{errors.password}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.confPassword}
                                error={errors.confPassword}
                                id="confPassword"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.confPassword
                                })}
                            />
                            <label htmlFor="confPassword">Confirm Password</label>
                            <span className="redText">{errors.confPassword}</span>
                        </div>
                        <div>
                            <button type="submit">Sign up</button>
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