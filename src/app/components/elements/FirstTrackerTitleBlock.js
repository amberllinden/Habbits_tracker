import React, { Component } from "react";

export class FirstTrackerTitleBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="first_tracker--titles">
                <div className={this.props.title_block}><span className={this.props.span_class}>{this.props.title_text}</span></div>
                <div className={this.props.month_block}><span className={this.props.span_class}>{this.props.month_text}</span></div>
                <div className={this.props.qoute_block}><span className={this.props.span_class}>{this.props.qoute_text}</span></div>
            </div>
        )
    }
}