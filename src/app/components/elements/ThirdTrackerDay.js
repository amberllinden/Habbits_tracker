import React, { Component } from "react";

export class ThirdTrackerDay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let divs = [];
        for (let i = 0; i < 7; i++) {
            divs.push((<div className={this.props.habbit} key={i}></div>))
        }
        return (
            <div className={this.props.day_habbit}>
                <span className={this.props.span_habbit}>{this.props.day}</span>
                {divs}
            </div>
        )
    }
}