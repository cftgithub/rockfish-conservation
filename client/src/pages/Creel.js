import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import { List, ListItem } from '../components/List';
import CreelForm from "../components/CreelForm";
import Heading from "../components/Header";
import { Player, ControlBar, LoadingSpinner } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import video from "../assets/videos/video.mp4";

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
      .then(res =>
        this.setState({ catches: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
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
          <Heading 
            title="Creel" 
            subtitle="Track your catches to help scientists monitor wild populations."
          />
          <CreelForm />

          <div className='card col-6 text-center float-left'>
            <div className='card-body creel text-center'>
              <h5 className='card-title creel text-center '>Catch History</h5>
              <List>
                {this.state.catches.map(caught => {
                  return (
                    <ListItem key={caught._id}>
                      <a href={'/creels/' + caught._id}>
                        <strong>
                          {caught.species} Length: {caught.length}
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Creel;
