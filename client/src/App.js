import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
<<<<<<< HEAD
import Fishing from "./pages/Fishing";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
=======
import Fishing from "./pages/Fishing/Fishing";
import MobileCreel from "./pages/MobileCreel/MobileCreel";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Nav from "./components/Navbar";
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MobileNavbar from "./components/MobileNavbar";
import MediaQuery from 'react-responsive';

<<<<<<< HEAD
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/fishing" component={Fishing} />
          <Route exact path="/login" component={Login} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
=======
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MediaQuery minDeviceWidth={768}>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/species" component={Species} />
            <Route exact path="/creel" component={Creel} />
            <Route exact path="/fishing" component={Fishing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/creel" component={Creel} />
            </Switch>
          </Wrapper>
          <Footer />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767}>
          <MobileNavbar />
          {/* <Route exact path="/" component={MobileHome} />
          <Route exact path="/species" component={MobileSpecies} /> */}
          <Route exact path="/creel" component={MobileCreel} />
          {/* <Route exact path="/fishing" component={MobileFishing} />
          <Route exact path="/login" component={MobileLogin} /> */}
        </MediaQuery>
      </Router>
    </Provider>
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0
  );
}

export default App;
