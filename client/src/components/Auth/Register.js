import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./login.css";
import Heading from "../Header";
import { Form } from "react-bootstrap";

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
            <>
                <Heading title={'Creel Registration Page'} />
                <div className='speciespage container-fluid text-center'></div>
                <div className="container">
                    <div className="row">
                        <div id="charColor" className="col-12 offset-s2">
                            <h4>Create an account to track your catches and help scientists monitor fish populations!</h4>
                            <p id="aLink">
                                Already have an account? <Link id="aLink" to="/login">Log in here!</Link>
                            </p>
                        </div>
                        <div id="charColor" className="col-12 offset-s2">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group-row">
                                    <Form.Group controlId="email">
                                        <Form.Control
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            type="email"
                                            className={classnames("", {
                                                invalid: errors.email
                                            })}
                                        />
                                        <Form.Label>Email</Form.Label>
                                        <span className="redText">{errors.email}</span>
                                    </Form.Group>
                                </div>
                                <div className="form-group-row">
                                    <Form.Group controlId="password">
                                        <Form.Control
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.password
                                            })}
                                        />
                                        <Form.Label>Password</Form.Label>
                                        <span className="redText">{errors.password}</span>
                                    </Form.Group>
                                </div>
                                <div className="form-group-row">
                                    <Form.Group controlId="confPassword">
                                        <Form.Control
                                            onChange={this.onChange}
                                            value={this.state.confPassword}
                                            error={errors.confPassword}
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.confPassword
                                            })}
                                        />
                                        <Form.Label>Confirm Password</Form.Label>
                                        <span className="redText">{errors.confPassword}</span>
                                    </Form.Group>
                                </div>
                                <div>
                                    <button type="submit">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
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