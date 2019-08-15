import React, { Component } from "react";
import { FirstTrackerTitleBlock } from './elements/FirstTrackerTitleBlock'
import { FirstTrackerHabbitsblockForStrings } from "./elements/FirstTrackerHabbitsblockForStrings";
import { FirstTrackerStringWithDays } from "./elements/FirstTrackerStringWithDays";
import { ContainerForDays } from "./elements/ContainerForDays";


export class FirstTracker extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="first_tracker">
                <FirstTrackerTitleBlock
                    title_block={'first_tracker--title_block--title'}
                    month_block={'first_tracker--title_block--month'}
                    qoute_block={'first_tracker--title_block--quote'}
                    span_class={'first_tracker--title'}
                    title_text={'Blah'}
                    month_text={'Blah'}
                    qoute_text={'Blah'}
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