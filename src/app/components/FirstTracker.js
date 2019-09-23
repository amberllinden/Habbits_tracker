import React, { Component } from "react";
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
            color_circle: ''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.changeQoute = this.changeQoute.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.changeColorFont = this.changeColorFont.bind(this);
        this.changeColorHabbitsLine = this.changeColorHabbitsLine.bind(this);
        this.changeColorCircle = this.changeColorCircle.bind(this);
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
        let { title_text, month_text, qoute_text, font_value, color_font_value, color_habbits_line, color_circle } = this.state;
        const { fonts, colors_fonts, color_habbits_lines } = data_obj; 

        return (
            <section className="first_tracker">
                <div className="first_tracker--constructor">
                    <input type="text" value={this.state.title_text} onChange={this.changeTitle} maxLength={145} placeholder="Название трекера"/>
                    <input type="text" value={this.state.month_text} onChange={this.changeMonth} maxLength={145} placeholder="Месяц трекера" />
                    <input type="text" value={this.state.qoute_text} onChange={this.changeQoute} maxLength={145} placeholder="Мотивационная цитата" />
                    <Select
                        value={font_value}
                        arr={fonts}
                        name="font_select"
                        changeStyle={this.changeFont}
                    />
                    <select name="color_font_select" value={color_font_value} onChange={this.changeColorFont}>
                        {
                            colors_fonts.map((color_fonts, index) => <option key={index} value={color_fonts.value}>{color_fonts.name}</option>)
                        }
                    </select>
                    <select name="border_select" value={color_habbits_line} onChange={this.changeColorHabbitsLine}>
                        {
                            color_habbits_lines.map((color_habbit_line, index) => <option key={index} value={color_habbit_line.value}>{color_habbit_line.name}</option>)
                        }
                    </select>
                    <select name="border_select_circle" value={color_circle} onChange={this.changeColorCircle}>
                        {
                            color_habbits_lines.map((color_habbit_line, index) => <option key={index} value={color_habbit_line.value}>{color_habbit_line.name}</option>)
                        }
                    </select>
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
            </section>
        )
    }
}