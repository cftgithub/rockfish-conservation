import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <>
      <Navbar className="desktop-navbar">
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
      </Navbar>
    </>
  );
}

export default Nav;
