import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn"
import API from "../utils/API";
import { List, ListItem } from "../components/List";

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
                <span
                  className='input-group-text creel'
                  id='inputGroup-sizing-sm'>
                  Species
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel mt-1'
                  id='inputGroup-sizing-sm'>
                  Length
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel mt-1'
                  id='inputGroup-sizing-sm'>
                  Date Caught
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <div className='input-group-prepend'>
                <span
                  className='input-group-text creel mt-1'
                  id='inputGroup-sizing-sm'>
                  Location Caught
                </span>
              </div>

              <input
                type='text'
                className='form-control'
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'></input>
              <br></br>
              <button className='add-btn  bg-success'>Add</button>
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
