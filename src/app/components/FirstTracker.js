import React, { Component } from "react";
import { FirstTrackerTitleBlock } from './elements/FirstTrackerTitleBlock'
import { FirstTrackerHabbitsblockForStrings } from "./elements/FirstTrackerHabbitsblockForStrings";
import { FirstTrackerStringWithDays } from "./elements/FirstTrackerStringWithDays";
import { data_obj } from "./data/styles";


export class FirstTracker extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            title_text: '',
            month_text: '',
            qoute_text: '',
            font_value: ''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.changeQoute = this.changeQoute.bind(this);
        this.changeFont = this.changeFont.bind(this);
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

    render() {
        let { title_text, month_text, qoute_text, font_value } = this.state;
        const fonts = data_obj.fonts;

        return (
            <section className="first_tracker">
                <div className="first_tracker--constructor">
                    <input type="text" value={this.state.title_text} onChange={this.changeTitle} maxLength={145} placeholder="Название трекера"/>
                    <input type="text" value={this.state.month_text} onChange={this.changeMonth} maxLength={145} placeholder="Месяц трекера" />
                    <input type="text" value={this.state.qoute_text} onChange={this.changeQoute} maxLength={145} placeholder="Мотивационная цитата" />
                    <select name="font_select" value={font_value} onChange={this.changeFont}>
                        {
                            fonts.map((font, index) => <option key={index} value={font.name}>{font.name}</option>)
                        }
                    </select>
                </div>
                <FirstTrackerTitleBlock
                    title_block={`first_tracker--title_block--title ${font_value}`}
                    month_block={`first_tracker--title_block--month ${font_value}`}
                    qoute_block={`first_tracker--title_block--quote ${font_value}`}
                    span_class={'first_tracker--title'}
                    title_text={title_text}
                    month_text={month_text}
                    qoute_text={qoute_text}
                />
                <div className="first_tracker--calendar_and_habbits">
                    <FirstTrackerHabbitsblockForStrings 
                        habbit_string_class={'first_tracker--strings_habbits'}
                    />
                    <FirstTrackerStringWithDays
                        class_for_string_days={'first_tracker--day'}
                        class_for_container_days={'first_tracker--container_for_days'}
                    />
                </div>
            </section>
        )
    }
}