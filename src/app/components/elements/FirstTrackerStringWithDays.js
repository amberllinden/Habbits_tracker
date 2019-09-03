import React, { Component } from "react";
import { ContainerForDays } from "./ContainerForDays";

export class FirstTrackerStringWithDays extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let containers = [];
        for(let i=0; i<10; i++) {
            containers.push(<ContainerForDays key={i}
                class_of_days={this.props.class_for_string_days}
                class_of_days_container={this.props.class_for_container_days}
                />)
        }
        return (
            <div className='first_tracker--habbits_block--for_days'>
                {containers}
            </div>
        )
    }
}

