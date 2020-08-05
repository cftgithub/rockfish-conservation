import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
import Fishing from "./pages/Fishing";
import Login from "./pages/Login/Login";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MobileNavbar from "./components/MobileNavbar";
import MediaQuery from 'react-responsive';

function App() {
  return (
    <Router>
      <MediaQuery minDeviceWidth={768}>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/fishing" component={Fishing} />
          <Route exact path="/login" component={Login} />
        </Wrapper>
        <Footer />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <MobileNavbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/fishing" component={Fishing} />
          <Route exact path="/login" component={Login} />
        </Wrapper>
      </MediaQuery>
    </Router>
  );
}

export default App;
