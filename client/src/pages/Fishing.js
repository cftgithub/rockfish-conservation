import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import SafeFishing from "../components/Fishing";
import Heading from "../components/Header";
import Fishing from "../fishing.json";

class fishing extends Component {

    render() {
        return (
            <>
                <Heading title={"Fishing Page"} />
                <Wrapper>
                    {Fishing.map(fish => (
                        <SafeFishing
                            key={fish.id}
                            id={fish.id}
                            name={fish.name}
                            image={fish.image}
                            status={fish.status}
                        />
                    ))}
                </Wrapper>
            </>
        );
    }
}

export default fishing;
