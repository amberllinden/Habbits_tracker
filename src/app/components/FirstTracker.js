import React, { Component } from "react";
import { FirstTrackerTitleBlock } from './elements/FirstTrackerTitleBlock'
import { FirstTrackerHabbitsblockForStrings } from "./elements/FirstTrackerHabbitsblockForStrings";
import { FirstTrackerStringWithDays } from "./elements/FirstTrackerStringWithDays";


export class FirstTracker extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            title_text: '',
            month_text: '',
            qoute_text: ''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.changeQoute = this.changeQoute.bind(this);
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
    

    render() {
        let { title_text, month_text, qoute_text } = this.state;
        return (
            <section className="first_tracker">
                <div className="first_tracker--constructor">
                    <input type="text" value={this.state.title_text} onChange={this.changeTitle} placeholder="Название трекера"/>
                    <input type="text" value={this.state.month_text} onChange={this.changeMonth} placeholder="Месяц трекера" />
                    <input type="text" value={this.state.qoute_text} onChange={this.changeQoute} placeholder="Мотивационная цитата" />
                </div>
                <FirstTrackerTitleBlock
                    title_block={'first_tracker--title_block--title'}
                    month_block={'first_tracker--title_block--month'}
                    qoute_block={'first_tracker--title_block--quote'}
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