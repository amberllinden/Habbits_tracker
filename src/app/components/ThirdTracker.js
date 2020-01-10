import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { ThirdTrackerDay } from "./elements/ThirdTrackerDay";
import { Select } from "./elements/Select";
import { data_obj } from "./data/styles";
import { Button } from "./elements/Button";

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
            },
            anchor: '#'
        }
        this.changeFontStyle = this.changeFontStyle.bind(this);
        this.changeColorSheme = this.changeColorSheme.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.font_style !== prevState.font_style || this.state.select_name !== prevState.select_name) {
            const track = document.getElementsByClassName('third_tracker')[0];
            html2canvas(track)
                .then((canvas) => {
                    let myImg = canvas.toDataURL('image/png');
                    this.setState({ anchor: myImg })
                })
        } 
    }

    changeFontStyle(event) {
        event.target.value == '0' ? this.setState({ font_style: '' }) : this.setState({ font_style: event.target.value })
    }
    changeColorSheme(event) {
        const color_scheme = data_obj.color_scheme;
        let index_value = event.target.value;
        let scheme_obj = color_scheme[index_value].options;
        this.setState((prevState) => ({
            scheme_options: Object.assign({}, prevState.scheme_options, scheme_obj),
            select_name: index_value
        }))
    }

    render() {
        let { font_style, scheme_options, select_name, anchor} = this.state;
        let { color_day, color_span, color_habbit } = scheme_options;
        const { fonts, color_scheme } = data_obj;
        const day_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const weeks = [1, 2, 3, 4];
        return (
            <section className="third_tracker">
                <div data-html2canvas-ignore className="second_tracker-selects">
                    <Select
                        value={font_style}
                        arr={fonts}
                        css_class="second_tracker_select"
                        changeStyle={this.changeFontStyle}
                    />
                    <Select
                        value={select_name}
                        arr={color_scheme}
                        css_class="second_tracker_select"
                        changeStyle={this.changeColorSheme}
                    />
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
                <Button
                    css_class={"download_button"}
                    text={"DOWNLOAD TRACKER"}
                    file_name={"my_tracker.png"}
                    attrs={{ "data-html2canvas-ignore": true }}
                    anc={anchor}
                />
            </section>
        )
    }
}