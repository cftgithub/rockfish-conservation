import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
  // link tag changes page path without reloading the entire page
  <nav className="navbar bg-light navbar-light">
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
            Species</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/creel"
            className={
              window.location.pathname === "/creel" ? "active" : ""}
          >
            Creel</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/regulations"
            className={
              window.location.pathname === "/regulations" ? "active" : ""}
          >
            Regulations</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
