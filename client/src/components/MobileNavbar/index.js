import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
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
          <div className="mobile-navbar-header">
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
        </Navbar>
      </>
    );
  }
}

export default MobileNavbar;