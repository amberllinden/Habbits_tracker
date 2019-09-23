import React, { Component } from "react";

export class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { value, arr, name, changeStyle } = this.props;

        return (
            <select name={name} 
            value={value} 
            onChange={(e) => changeStyle(e)}>
                {
                    arr.map((a, index) => <option key={index} value={a.name}>{a.name}</option>)
                }
            </select>
        )
    }
}