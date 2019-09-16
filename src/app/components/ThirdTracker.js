import React, { Component } from "react";
import { ThirdTrackerDay } from "./elements/ThirdTrackerDay";
import { data_obj } from "./data/styles";

export class ThirdTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            font_style: '',
            select_name: '',
            scheme_options: {
                color_day: '',
                color_span: '',
                color_habbit: ''
            }
        }
        this.changeFontStyle = this.changeFontStyle.bind(this);
        this.changeColorSheme = this.changeColorSheme.bind(this);
    }

    changeFontStyle(event) {
        event.target.value == '0' ? this.setState({ font_style: '' }) : this.setState({ font_style: event.target.value })
    }
    changeColorSheme(event) {
        const color_scheme = data_obj.color_scheme;
        let index_value = event.target.value;
        let scheme_obj = color_scheme[index_value].options;
        this.setState((prevState) => ({
            scheme_options: Object.assign({}, prevState.scheme_options, scheme_obj)
        }))
        this.setState({ select_name: event.target.value})
    }

    render() {
        let { font_style, scheme_options, select_name} = this.state;
        let { color_day, color_span, color_habbit } = scheme_options;
        const { fonts, color_scheme } = data_obj;
        const day_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const weeks = [1, 2, 3, 4];
        return (
            <section className="third_tracker">
                <div className="second_tracker-selects">
                <select className="second_tracker_select" value={font_style} onChange={this.changeFontStyle}>
                    {
                        fonts.map((font, index) => <option key={index} value={font.value}>{font.name}</option>)
                    }
                </select>
                <select className="second_tracker_select" value={select_name} onChange={this.changeColorSheme}>
                    {
                        color_scheme.map((scheme, index) => <option key={index} value={scheme.value}>{scheme.name}</option>)
                    }
                </select>
                </div>
                {weeks.map((week) => ( 
                    <div key={week} className={`third_tracker--week`}>
                    {day_of_week.map((day, key) => (
                        <ThirdTrackerDay
                            key={key}
                            habbit={`third_tracker--habbit ${color_habbit}`}
                            day_habbit={`third_tracker--day ${color_day}`}
                            span_habbit={`third_tracker_title_day ${font_style} ${color_span}`}
                            day={day}
                        /> ))
                    }
                </div>))
                }
            </section>
        )
    }
}