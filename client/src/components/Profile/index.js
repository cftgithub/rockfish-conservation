import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavLink } from "react-router-dom";

class Profile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div className="login">
                <NavLink to="/login"
                    className={window.location.pathname === "/login" ? "active nav-login" : "nav-login"}
                    activeStyle={{ color: "white" }}
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={this.onLogoutClick}
                >
                    Logout
                </NavLink>
            </div>
        );
    }
}
Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);