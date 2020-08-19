import React, { Component } from "react";
<<<<<<< HEAD:client/src/pages/Fishing.js
import Wrapper from "../components/Wrapper";
import SafeFishing from "../components/Fishing";
import Heading from "../components/Header";
import Fishing from "../fishing.json";
import References from "../components/References";
=======
import Wrapper from "../../components/Wrapper";
import SafeFishing from "../../components/Fishing";
import Heading from "../../components/Header";
import Fishing from "../../fishing.json";
import "./style.css";
>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0:client/src/pages/Fishing/Fishing.js

class App extends Component {

    render() {
        return (
            <>
<<<<<<< HEAD:client/src/pages/Fishing.js
                <Heading title={"Safe Fishing"} />
=======
                <div className='fishingpage container-fluid text-center'></div>
                <Heading title={"Fishing Gear"} />

>>>>>>> b3a6e1922ec084420e7727f250546afe0e2be1c0:client/src/pages/Fishing/Fishing.js
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
            </>
        );
    }
}

export default App;
