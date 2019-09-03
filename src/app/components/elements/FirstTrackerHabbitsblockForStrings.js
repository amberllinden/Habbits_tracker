import React, { Component } from "react";

export class FirstTrackerHabbitsblockForStrings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let divs = [];
        for(let i=0; i<10; i++) {
            divs.push((<div className={this.props.habbit_string_class} key={i}></div>))
        }
        
        return (
            <div className="first_tracker--habbits_block--for_strings">
                {divs}
            </div>
        )
    }
}