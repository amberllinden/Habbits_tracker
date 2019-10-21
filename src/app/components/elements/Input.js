import React, { Component } from "react";

export class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { wrapper_css, input_css, input_type, input_name, label, label_css, changeStyle } = this.props;

        return (
            <div className={wrapper_css}>
                <input className={input_css} 
                       name={input_name} 
                       type={input_type} 
                       onChange={(e) => changeStyle(e)}/>
                {label && <label className={label_css} htmlFor={input_name}>{label}</label>}
            </div>
        )
    }
}