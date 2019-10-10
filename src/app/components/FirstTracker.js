import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { FirstTrackerTitleBlock } from './elements/FirstTrackerTitleBlock'
import { FirstTrackerHabbitsblockForStrings } from "./elements/FirstTrackerHabbitsblockForStrings";
import { FirstTrackerStringWithDays } from "./elements/FirstTrackerStringWithDays";
import { Select } from "./elements/Select";
import { data_obj } from "./data/styles";


export class FirstTracker extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            title_text: '',
            month_text: '',
            qoute_text: '',
            font_value: '',
            color_font_value: '', 
            color_habbits_line: '',
            color_circle: '',
            anchor: '#'
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.changeQoute = this.changeQoute.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.changeColorFont = this.changeColorFont.bind(this);
        this.changeColorHabbitsLine = this.changeColorHabbitsLine.bind(this);
        this.changeColorCircle = this.changeColorCircle.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.title_text !== prevState.title_text || this.state.month_text !== prevState.month_text || 
            this.state.qoute_text !== prevState.qoute_text || this.state.font_value !== prevState.font_value ||
            this.state.color_font_value !== prevState.color_font_value || this.state.color_habbits_line !== prevState.color_habbits_line ||
            this.state.color_circle !== prevState.color_circle) {
            const track = document.getElementsByClassName('first_tracker')[0];
            html2canvas(track)
                .then((canvas) => {
                    let myImg = canvas.toDataURL('image/png');
                    this.setState({ anchor: myImg })
                })
        }
    }

    changeTitle(event) {
        this.setState({ title_text: event.target.value})
    }
    changeMonth(event) {
        this.setState({ month_text: event.target.value })
    }
    changeQoute(event) {
        this.setState({ qoute_text: event.target.value })
    }
    changeFont(event) {
        event.target.value == 'Выберите шрифт' ? this.setState({ font_value: '' }) : this.setState({ font_value: event.target.value })
    }
    changeColorFont(event) {
        event.target.value == '0' ? this.setState({ color_font_value: '' }) : this.setState({ color_font_value: event.target.value })
    }
    changeColorHabbitsLine(event) {
        event.target.value == '0' ? this.setState({ color_habbits_line: '' }) : this.setState({ color_habbits_line: event.target.value })
    }
    changeColorCircle(event) {
        event.target.value == '0' ? this.setState({ color_circle: '' }) : this.setState({ color_circle: event.target.value })
    }

    render() {
        let { title_text, month_text, qoute_text, font_value, color_font_value, color_habbits_line, color_circle, anchor } = this.state;
        const { fonts, colors_fonts, color_habbits_lines } = data_obj; 

        return (
            <section className="first_tracker">
                <div data-html2canvas-ignore className="first_tracker--constructor">
                    <input type="text" value={this.state.title_text} onChange={this.changeTitle} maxLength={145} placeholder="Название трекера"/>
                    <input type="text" value={this.state.month_text} onChange={this.changeMonth} maxLength={145} placeholder="Месяц трекера" />
                    <input type="text" value={this.state.qoute_text} onChange={this.changeQoute} maxLength={145} placeholder="Мотивационная цитата" />
                    <Select
                        value={font_value}
                        arr={fonts}
                        name="font_select"
                        changeStyle={this.changeFont}
                    />
                    <Select
                        value={color_font_value}
                        arr={colors_fonts}
                        name="color_font_select"
                        changeStyle={this.changeColorFont}
                    />
                    <Select
                        value={color_habbits_line}
                        arr={color_habbits_lines}
                        name="border_select"
                        changeStyle={this.changeColorHabbitsLine}
                    />
                    <Select
                        value={color_circle}
                        arr={color_habbits_lines}
                        name="border_select_circle"
                        changeStyle={this.changeColorCircle}
                    />
                </div>
                <FirstTrackerTitleBlock
                    title_block={`first_tracker--title_block--title ${font_value} ${color_font_value}`}
                    month_block={`first_tracker--title_block--month ${font_value} ${color_font_value}`}
                    qoute_block={`first_tracker--title_block--quote ${font_value} ${color_font_value}`}
                    span_class={'first_tracker--title'}
                    title_text={title_text}
                    month_text={month_text}
                    qoute_text={qoute_text}
                />
                <div className="first_tracker--calendar_and_habbits">
                    <FirstTrackerHabbitsblockForStrings 
                        habbit_string_class={`first_tracker--strings_habbits ${color_habbits_line}`}
                    />
                    <FirstTrackerStringWithDays
                        class_for_container_days={'first_tracker--container_for_days '}
                        class_for_string_days={`first_tracker--day ${color_circle}`}
                    />
                </div>
                <a
                    className="download_button"
                    href={anchor}
                    download="my_tracker.png"
                    data-html2canvas-ignore>DONLOAD TRACKER</a>
            </section>
        )
    }
}