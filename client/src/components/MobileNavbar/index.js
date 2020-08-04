import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./style.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function MobileNavbar() {
  return (
    <>
      {/* Simulate a smartphone / tablet */}
      <div className="mobile-container">

      {/* Top Navigation Menu */}

        <div id="myNavLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>







          <MediaQuery minDeviceWidth={1224} className="desktop">
            <p>You are a desktop or laptop</p>
          </MediaQuery>
          <MediaQuery minDeviceWidth={768} maxDeviceWidth={991} className="tablet">
            <p>You are a tablet</p>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={767} className="mobile">
            <p>You are a mobile phone</p>
          </MediaQuery>



      </div>
    </>
  );
}

// export default MobileNavbar;