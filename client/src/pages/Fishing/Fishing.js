import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import SafeFishing from "../../components/Fishing";
import Heading from "../../components/Header";
import Fishing from "../../fishing.json";
import References from "../../components/References";
import { Button } from "react-bootstrap";
import "./style.css";

class App extends Component {

    render() {
        return (
            <>
                <div className='fishingpage container-fluid text-center'></div>
                <Heading title={"Fishing Gear"} />
                <div>                <Button id="game" variant="info" href="https://rileychatwin.github.io/Fishy/." target="_blank">Play Game</Button></div>

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
