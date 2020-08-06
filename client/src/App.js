import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
import Fishing from "./pages/Fishing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MobileNavbar from "./components/MobileNavbar";
import MediaQuery from 'react-responsive';

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
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/fishing" component={Fishing} />
          <Route exact path="/login" component={Login} />
        </Wrapper>
      </MediaQuery>
    </Router>
    </Provider>
  );
}

export default App;
