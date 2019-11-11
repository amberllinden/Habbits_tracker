import React, { Component } from "react";

export class FourthTrackerWeek extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { css_week, week_array, css_class, is_week_array } = this.props;
        let day_of_week_divs = [];
        let week_divs_wihtout_day = [];
        if (is_week_array) {
            for (let i = 0; i < week_array.length; i++) {
                day_of_week_divs.push((<div className={css_class} key={i}>{week_array[i]}</div>))
            }
        }
        for (let i = 0; i < 7; i++) {
            week_divs_wihtout_day.push((<div className={css_class} key={i}></div>))
        }
        return (
            <div className={css_week}>
                {is_week_array ? day_of_week_divs : week_divs_wihtout_day}
            </div>
        )
    }
}