import React, { Component } from "react";
import { FirstTracker } from "./FirstTracker.js";
import { SecondTracker } from "./SecondTracker.js";


export class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FirstTracker />
                <SecondTracker />
            </div>
            
        );
    }
}

export default App;