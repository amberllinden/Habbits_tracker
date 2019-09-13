import React, { Component } from "react";
import { ThirdTrackerDay } from "./elements/ThirdTrackerDay";
import { data_obj } from "./data/styles";

export class ThirdTracker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const day_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const weeks = [1, 2, 3, 4]
        return (
            <section className="third_tracker">
                {weeks.map((week) => ( 
                    <div key={week} className={`third_tracker--week `}>
                    {day_of_week.map((day, key) => (
                        <ThirdTrackerDay
                            key={key}
                            habbit={`third_tracker--habbit `}
                            day_habbit={`third_tracker--day `}
                            span_habbit={`third_tracker_title_day `}
                            day={day}
                        /> ))
                    }
                </div>))
            }
            </section>
        )
    }
}