import React, { Component } from "react";
import Species from "../components/Species";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";

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
                <Heading />
                <Wrapper>
                    {this.state.fish.map(fish => (
                        <Species
                            key={fish.id}
                            id={fish.id}
                            name={fish.commonName}
                            image={fish.image}
                            status={fish.status}
                        />
                    ))}
                </Wrapper>
            </>
        );
    }
}

export default App;
