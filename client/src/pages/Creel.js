import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn"
import { Input, SubmitBtn } from "../components/SubmitBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Creel extends Component {
  state = {
    catches: [],
    species: "",
    length: []
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

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    alert('New Info Was Submitted: ' + this.state.value)
    event.preventDefault();
    if (this.state.species && this.state.length && this.state.dateCaught && this.state.locationCaught){
      API.saveCreel({
        species: this.state.species,
        length: this.state.length,
        dateCaught: this.state.dateCaught,
        locationCaught: this.state.locationCaught
      })
      .then(res => this.loadCatches())
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className='creelpage'>
        <div className='container creel'>
          <h1 className='text-center'>Creel Page</h1>
          <h4 className='text-center mb-3'>
            Track your catches to help scientists monitor wild populations.
          </h4>
          <div className='card col-6 text-center float-left'>
            <div className='card-body creel text-center'>
              <h5 className='card-title creel text-center '>
                Enter Rockfish data.
              </h5>
              <p className='card-text'></p>
              <div className='input-group-prepend'>
                <Input
                  value={this.state.species}
                  onChange={this.handleInputChange}
                  name='species'
                  placeholder='Species (required)'
                />
              </div>
              <div className='input-group-prepend'>
                <Input
                  value={this.state.length}
                  onChange={this.handleInputChange}
                  name='length'
                  placeholder='Length (required)'
                />
              </div>
              <div className='input-group-prepend'>
                <Input
                  value={this.state.dateCaught}
                  onChange={this.handleInputChange}
                  name='dateCaught'
                  placeholder='dateCaught (required)'
                />
              </div>
              <div className='input-group-prepend'>
                <Input
                  value={this.state.locationCaught}
                  onChange={this.handleInputChange}
                  name='locationCaught'
                  placeholder='Location Caught (required)'
                />
              </div>
              <br></br>
              <SubmitBtn
                disabled={!(this.state.species && this.state.length)}
                onClick={this.handleFormSubmit}>Submit</SubmitBtn>
            </div>
          </div>
          <div className='card col-6 text-center float-left'>
            <div className='card-body creel text-center'>
              <h5 className='card-title creel text-center '>Catch History</h5>
              <List>
                {this.state.catches.map((caught) => {
                  return (
                    <ListItem key={caught._id}>
                      <a href={"/creels/" + caught._id}>
                        <strong>
                          {caught.species} Length: {caught.length}
                        </strong>
                      </a>
                      <br></br>
                      <DeleteBtn onClick={() => this.deleteCreel(caught._id)} />
                      <EditBtn onClick={() => this.updateCreel(caught._id)} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creel;
