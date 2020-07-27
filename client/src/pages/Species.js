import React, { Component } from "react";
import Species from "../components/Species";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";
import Buttons from "../components/Buttons";
// import Modal from "../components/Modal";

import fish from "../fish.json";
// import "../App.css";

// Code below handles append
class App extends Component {
  // Sets this.state.fish to the fish json array
  state = {
    fish
  };
  componentDidMount() {
    window.jQuery('.btn').popover();
  }
  // moreInfo = id => {
  //     const fish = this.state.fish.filter()
  // }

 

  render() {
    return (
      <>
        <Heading title={'Rockfish Identification'} />
        {/* <Buttons title={"Good"}/>
                <Buttons title={"Vulnerable"}/>
                <Buttons title={"Threatened"}/>
                <Buttons title={"Endangered"}/>
                <Buttons title={"Unknown"}/> */}
        <Buttons />
        <Wrapper>
          {this.state.fish.map((fish, index) => {
            return <Species
              key={index}
              id={fish.id}
              name={fish.commonName}
              image={fish.image}
              status={fish.status}
              title={fish.commonName}
              sciName={'Scientific Name: ' + fish.sciName}
              location={'Location: ' + fish.location}
              biology={fish.biology}
            />
            })}
          {/* <Modal /> */}
        </Wrapper>
      </>
    );
  }
}

export default App;
