import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import { List, InputGroup } from "../components/List";
import CreelForm from "../components/CreelForm";
import DeleteBtn from "../components/DeleteBtn";
//import EditBtn from "../components/EditBtn";
// import Profile from "../components/Profile";
import Heading from "../components/Header";
import { Card } from "react-bootstrap";
// import { Player, ControlBar, LoadingSpinner } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
// import video from "../assets/videos/video.mp4";
import { SubmitBtn } from "../components/SubmitBtn";

class Creel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catches: [],
      species: "",
      length: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadCatches();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleFormSubmit = event => {
    event.preventDefault();    
    if (this.state.species && this.state.length){
      this.saveCreel({
        species: this.state.species,
        length: this.state.length
      })
      // .then(res => this.loadCatches())
      // .catch(err => console.log(err));
    }
  };

  loadCatches = () => {
    API.getCreels()
      .then(res => this.setState({ catches: res.data }))
      .catch(err => console.log(err));
  };

  deleteCreel = (id) => {
    API.deleteCreel(id)
      .then((res) => this.loadCatches())
      .catch((err) => console.log(err));
  };

  saveCreel = (species, length) => {
    API.saveCreel(species, length).then((res) => this.loadCatches());
  };

  render() {
    return (
      <>
        <div className='creelpage container-fluid text-center'></div>
        <div className='col-lg-12 col-md-auto p-0 d-flex justify-content-center text-center cards'>
          <div className='container-fluid creel'>
            <div className="creel-header">
              <Heading
                title='Creel'
                subtitle='Track your catches to help scientists monitor wild populations.'
              />
            </div>
            <div className='row'>
              <div className='col-6 text-center'>
                <CreelForm onChange={this.handleChange} />
                <SubmitBtn onClick={this.handleFormSubmit} />
              </div>
              <div className='col-6 text-center'>
                <Card className='catch-card'>
                  <Card.Body>
                    <Card.Title className='catch-title'>
                      Catch History
                    </Card.Title>
                    {this.state.catches.map((caught) => {
                      return (
                        <List key={caught._id}>
                          <InputGroup key={caught._id}>
                            <a href={"/creels/" + caught._id}>
                              <strong className='catch-text'>
                                Species: {caught.species}, Length:{" "}
                                {caught.length}
                              </strong>
                            </a>
                            <DeleteBtn
                              onClick={() => this.deleteCreel(caught._id)}
                            />
                            
                          </InputGroup>
                        </List>
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

export default Creel;
