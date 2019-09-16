import React, { Component } from "react";
import { FirstTracker } from "./FirstTracker.js";
import { SecondTracker } from "./SecondTracker.js";
import { ThirdTracker } from "./ThirdTracker.js";


export class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FirstTracker />
                <SecondTracker />
                <ThirdTracker />
            </div>
            
        );
    }
}

export default App;