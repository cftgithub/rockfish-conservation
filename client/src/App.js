import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
import Regulations from "./pages/Regulations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/regulations" component={Regulations} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;