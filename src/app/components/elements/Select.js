import React, { Component } from "react";

export class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { value, arr, name, id, css_class, changeStyle } = this.props;

        return (
            <select name={name} 
            id={id}
            className={css_class}
            value={value} 
            onChange={(e) => changeStyle(e)}>
                {
                    arr.map((a, index) => <option key={index} value={a.value}>{a.name}</option>)
                }
            </select>
        )
    }
}