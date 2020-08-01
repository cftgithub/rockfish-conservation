import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Species from "./pages/Species";
import Creel from "./pages/Creel";
import Fishing from "./pages/Fishing";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Register from "./pages/Login/Register";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/creel" component={Creel} />
          <Route exact path="/fishing" component={Fishing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Switch>
            <PrivateRoute exact path="/creel" component={Creel} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
