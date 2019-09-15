import React, { Component } from "react";
import { ThirdTrackerDay } from "./elements/ThirdTrackerDay";
import { data_obj } from "./data/styles";

export class ThirdTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week_style: '',
            habbit_style: '',
            font_style: '',
            day_style: '',
        }
    }

    render() {
        let { week_style, habbit_style, font_style, day_style} = this.state;
        const day_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const weeks = [1, 2, 3, 4]
        return (
            <section className="third_tracker">
                {weeks.map((week) => ( 
                    <div key={week} className={`third_tracker--week ${week_style}`}>
                    {day_of_week.map((day, key) => (
                        <ThirdTrackerDay
                            key={key}
                            habbit={`third_tracker--habbit ${habbit_style}`}
                            day_habbit={`third_tracker--day ${font_style}`}
                            span_habbit={`third_tracker_title_day ${day_style}`}
                            day={day}
                        /> ))
                    }
                </div>))
                }
            </section>
        )
    }
}