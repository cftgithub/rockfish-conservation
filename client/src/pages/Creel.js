import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import { ListItem } from '../components/List';
import CreelForm from "../components/CreelForm";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import Heading from "../components/Header";
import { Card } from "react-bootstrap";
import { Player, ControlBar, LoadingSpinner } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import video from "../assets/videos/video.mp4";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Creel extends Component {
  state = {
    catches: [],
    species: "",
    length: 0
  };

  componentDidMount() {
    this.loadCatches();
  }

  loadCatches = () => {
    API.getCreels()
      .then((res) => this.setState({ catches: res.data }))
      .catch((err) => console.log(err));
  };

  deleteCreel = (id) => {
    API.deleteCreel(id)
      .then((res) => this.loadCatches())
      .catch((err) => console.log(err));
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;
    return (
      <>
      <div className="creelpage container-fluid text-center">
        <Player
          autoPlay
          loop
          muted
          playsInline
          src={video}>
          <ControlBar disabled />
          <LoadingSpinner disabled />
        </Player>
      </div>
      <div className="col-lg-12 col-md-auto p-0 d-flex justify-content-center text-center cards">
        <div className='container-fluid creel'>
            <button onClick={this.onLogoutClick}>Logout</button>
          <Heading 
            title="Creel" 
            subtitle="Track your catches to help scientists monitor wild populations."
          />
          <div className="row">
            <div className='col-6 text-center'>
              <CreelForm />
            </div>
            <div className="col-6 text-center">
              <Card className="catch-card">
                <Card.Body>
                  <Card.Title className="catch-title">Catch History</Card.Title>
                  {this.state.catches.map((caught) => {
                    return (
                      <ListItem key={caught._id}>
                        <a href={"/creels/" + caught._id}>
                          <strong className="catch-text">
                            {caught.species} Length: {caught.length}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteCreel(caught._id)} />
                        <EditBtn onClick={() => this.updateCreel(caught._id)} />
                      </ListItem>
                    );
                  })}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div> 
      </div>
      </>
    );
  }
}

Creel.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Creel);
