import React, { Component } from "react";
import { FirstTracker } from "./FirstTracker.js";


export class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FirstTracker />
            </div>
            
        );
    }
}

export default App;