import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import SafeFishing from "../components/Fishing";
import Heading from "../components/Header";
import Fishing from "../fishing.json";
import References from "../components/References";

class App extends Component {

    render() {
        return (
            <>
                <Heading title={"Safe Fishing"} />
                <Wrapper>
                    {Fishing.map(fish => (
                        <SafeFishing
                            key={fish.id}
                            id={fish.id}
                            name={fish.name}
                            image={fish.image}
                            status={fish.status}
                            description={fish.description}
                        />
                    ))}
                </Wrapper>
                <References />
            </>
        );
    }
}

export default App;
