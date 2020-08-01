import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    // link tag changes page path without reloading the entire page
    <nav className="navbar">
      <div className="container-fluid">
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
            className={window.location.pathname === "/login" ? "active" : ""}
            activeStyle={{ color: "white" }} 
            style={{ color: "white", textDecoration: "none" }}
          >
            Login
          </NavLink>
        </div>
        <div className="register">
          <NavLink to="/register"
            className={window.location.pathname === "/register" ? "active" : ""}
            activeStyle={{ color: "white" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            Register New User
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
