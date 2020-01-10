import React, { Component } from "react";

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { css_class, text, file_name, attrs, anc } = this.props;

        return (
            <a
                href={anc}
                download={file_name}
                className={css_class}
                {...attrs}
            >{text}</a>
        )
    }
}