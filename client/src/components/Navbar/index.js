import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    // link tag changes page path without reloading the entire page
    <nav className="navbar bg-light navbar-light fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Rockfish Conservation
        </Link>
        </div>
        <ul className="nav nav-tabs mr-auto">
          <li className="nav-item nav-link">
            <Link to="/"
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/home"
                  ? "active"
                  : ""
              }
            >
              Home</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/species"
              className={
                window.location.pathname === "/species" ? "active" : ""}
            >
              Species Identification</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/creel"
              className={
                window.location.pathname === "/creel" ? "active" : ""}
            >
              Creel</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/fishing"
              className={
                window.location.pathname === "/fishing" ? "active" : ""}
            >
              Fishing</Link>
          </li>
        </ul>
        <div className="login">
          <Link to="/login"
            className={
              window.location.pathname === "/login" ? "active" : ""}
          >
            Login
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
