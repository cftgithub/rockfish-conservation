import React, { Component } from "react";
import Species from "../components/Species";
import Wrapper from "../components/Wrapper";
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
                <h1 className="title">Rockfish Identification</h1>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Good" data-content="Populations of these species seem healthy and able to withstand current fishing pressures">Good</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Vulnerable" data-content="There is reason to believe the species may become threatened in the foreseeable future. 
                They are susceptible to bycatch or are undergoing heavy fishing pressure and their populations have not been adequately assessed. 
                Populations may be doing well in some regions but poor in other regions.">Vulnerable</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Threatened" data-content="Federally listed as threatened; the species is likely to become endangered in the foreseeable future">Threatened</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Endangered">Endangered</button>
                <button type="button" class="btn btn-primary" data-toggle="popover" data-trigger="hover"
                    title="Unknown">Unknown</button>
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
