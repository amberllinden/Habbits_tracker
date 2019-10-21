import React, { Component } from "react";
import { data_obj } from "./data/styles";
import { Select } from "./elements/Select";
import { Input } from "./elements/Input";

export class SecondTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    render() {
        
        const { days_of_week_rus, days_of_week_en, icons } = data_obj; 

        return (
            <section className="fourth_tracker">
                <div className="tracker_select second_tracker-selects">
                    <div className="tracker_select_column">
                        <Select
                            value={}
                            arr={}
                            css_class="second_tracker_select"
                            changeStyle={}
                        />
                        <Select
                            value={}
                            arr={}
                            css_class="second_tracker_select"
                            changeStyle={}
                        />
                        <Select
                            value={}
                            arr={}
                            css_class="second_tracker_select"
                            changeStyle={}
                        />
                        <Select
                            value={}
                            arr={}
                            css_class=""
                            changeStyle={}
                        />
                        <Select
                            value={}
                            arr={}
                            css_class="second_tracker_select"
                            changeStyle={}
                        />
                        {
                        // Появляется в зависимости от значения чекбокса
                        <Select
                            value={}
                            arr={}
                            css_class="second_tracker_select"
                            changeStyle={}
                        />
                        }
                    </div>
                    <div className="tracker_select_column">
                        <Input
                            wrapper_css="label_input"
                            input_name="days"
                            input_type="checkbox"
                            label="Дни недели на английском"
                            changeStyle={}
                        />
                        <Input
                            wrapper_css="label_input"
                            input_name="icons"
                            input_type="checkbox"
                            label="Значки у типов треккеров"
                            changeStyle={}
                        />
                    </div>
                </div>
            </section>
        )
    }
}