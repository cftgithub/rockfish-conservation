import React from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./style.css";

function Navbar() {
  return (
    <>
    <MediaQuery minDeviceWidth={992} device={{ deviceWidth: 1600 }} className="desktop">
      <nav className="navbar">
        <div className="container-fluid nav-box">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">
              Rockfish Conservation
            </NavLink>
          </div>
          <ul className="nav nav-tabs mr-auto">
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
          </ul>
          <div className="login">
            <NavLink to="/login"
              className={window.location.pathname === "/login" ? "active nav-login" : "nav-login"}
              activeStyle={{ color: "white" }} 
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </MediaQuery>
    <MediaQuery minDeviceWidth={768} maxDeviceWidth={991} className="tablet">
      <p>You are a tablet</p>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={767} className="mobile">
      <p>You are a mobile phone</p>
    </MediaQuery>
    </>
  );
}

export default Navbar;
