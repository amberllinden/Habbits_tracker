import React, { Component } from "react";

export class ContainerForDays extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let days = [];
        for (let i = 0; i < 31; i++) {
            days.push((<div className={this.props.class_of_days} key={i}></div>))
        }
        return (
            <div className={this.props.class_of_days_container}>
                {days}
            </div>
        )
    }
}

