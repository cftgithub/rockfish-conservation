import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Profile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        console.log(user);
        return (
            <div>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>Welcome, {user.username}!</h4>
                        <button onClick={this.onLogoutClick}>Logout</button>
                    </div>
                </div>
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