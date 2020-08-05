import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Dropdown } from "react-bootstrap";
import "./style.css";

class MobileNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <>
        <Navbar className="navbar mobile-navbar">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">
              Rockfish Conservation
            </NavLink>
          

            <nav>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={e => this.handleToggle(e)}
              />
              <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                <NavLink className="navlink" activeClassName="active" to="/species">
                  <li className="mobile-nav-links">Species Indentification</li>
                </NavLink>
                <NavLink className="navlink" activeClassName="active" to="/creel">
                  <li className="mobile-nav-links">Creel</li>
                </NavLink>
                <NavLink className="navlink" activeClassName="active" to="/fishing">
                  <li className="mobile-nav-links">Fishing</li>
                </NavLink>
                <NavLink className="navlink" activeClassName="active" to="/login">
                  <li className="mobile-nav-links">Login</li>
                </NavLink>
              </ul>
            </nav>
          </div>

          {/* <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarDropdown" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <i className="fa fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link">
                <NavLink to="/species"
                  className={window.location.pathname === "/species" ? "active" : ""}
                  activeStyle={{ color: "white" }}
                  style={{ color: "white" }}
                >
                  Species Identification</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink to="/creel"
                  className={window.location.pathname === "/creel" ? "active" : ""}
                  activeStyle={{ color: "white" }}
                  style={{ color: "white" }}
                >
                  Creel</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink to="/fishing"
                  className={window.location.pathname === "/fishing" ? "active" : ""}
                  activeStyle={{ color: "white" }}
                  style={{ color: "white" }}
                >
                  Fishing</NavLink>
              </li>
              <li className="nav-item nav-link">
                <NavLink to="/login"
                  className={window.location.pathname === "/login" ? "active nav-login" : "nav-login"}
                  activeStyle={{ color: "white" }}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div> */}
        </Navbar>
      </>
    );
  }
}

export default MobileNavbar;