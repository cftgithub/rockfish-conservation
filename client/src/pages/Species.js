import React, { Component } from "react";
import Species from "../components/Species";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";
import Buttons from "../components/Buttons";
import References from "../components/References";
import fish from "../fish.json";
// import Modal from "../components/Modal";
// import "../App.css";

class App extends Component {
  state = {
    fish,
    filteredFish: fish
  };
  componentDidMount() {
    window.jQuery('.btn').popover();
  }

  buttonFilter = (status) => {
    if (status === "All") {
      this.setState({ filteredFish: fish })
    } else {
      var filteredFish = this.state.fish.filter((fish) => { return fish.status === status })
      this.setState({ filteredFish });
    }
  };

  render() {
    return (
      <>
        <Heading title={'Rockfish Identification'} />
        <Buttons filterFish={this.buttonFilter.bind(this)} />
        <Wrapper>
          {this.state.filteredFish.map((fish, index) => {
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
              setFilter={this.buttonFilter}
            />
          })}
          {/* <Modal /> */}
        </Wrapper>
        <References />
      </>
    );
  }
}

export default App;