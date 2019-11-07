import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { data_obj } from "./data/styles";
import { Select } from "./elements/Select";
import { Input } from "./elements/Input";
import { FourthTrackerWeek } from "./elements/FourthTrackerWeek";

export class SecondTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eng_days: true,
            border_trackers: false,
            icons_title: false,
            font: '',
            color_font: '',
            title_icon: '',
            color_background: '',
            anchor: '#'
        }
        this.switchDays = this.switchDays.bind(this);
        this.switchBorders = this.switchBorders.bind(this);
        this.switchIcons = this.switchIcons.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.changeFontColor = this.changeFontColor.bind(this);
        this.changeTitleIcon = this.changeTitleIcon.bind(this);
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.eng_days !== prevState.eng_days || this.state.border_trackers !== prevState.border_trackers ||
            this.state.icons_title !== prevState.icons_title || this.state.font !== prevState.font ||
            this.state.color_font !== prevState.color_font || this.state.title_icon !== prevState.title_icon ||
            this.state.color_background !== prevState.color_background) {
            const track = document.getElementsByClassName('fourth_tracker')[0];
            html2canvas(track)
                .then((canvas) => {
                    let myImg = canvas.toDataURL('image/png');
                    this.setState({ anchor: myImg })
                })
        }
    }

    switchDays() {
        const { eng_days } = this.state;
        if (eng_days) {
            this.setState({ eng_days: false})
        } else {
            this.setState({ eng_days: true })
        }
    }

    switchBorders() {
        const { border_trackers } = this.state;
        if (border_trackers) {
            this.setState({ border_trackers: false })
        } else {
            this.setState({ border_trackers: true })
        }
    }

    switchIcons() {
        const { icons_title } = this.state;
        if (icons_title) {
            this.setState({ icons_title: false })
        } else {
            this.setState({ icons_title: true })
        }
    }

    changeFont(event) {
        event.target.value == 'Выберите шрифт' ? this.setState({ font: '' }) : this.setState({ font: event.target.value })
    }

    changeFontColor(event) {
        event.target.value == 'Выберите цвет' ? this.setState({ color_font: '' }) : this.setState({ color_font: event.target.value })
    }

    changeTitleIcon(event) {
        event.target.value == 'Выберите иконку' ? this.setState({ title_icon: '' }) : this.setState({ title_icon: event.target.value })
    }

    changeBackgroundColor(event) {
        event.target.value == 'Цвет фона' ? this.setState({ color_background: '' }) : this.setState({ color_background: event.target.value })
    }

    render() {
        let { 
            eng_days,
            border_trackers,
            icons_title,
            font,
            color_font,
            title_icon,
            color_background,
            anchor
        } = this.state;
        const { 
            days_of_week_rus, 
            days_of_week_en, 
            icons, 
            fonts, 
            colors_fonts, 
            colors_background
        } = data_obj; 

        const array_of_weeks = [0, 1, 2, 3, 4];
        

        return (
            <section className="fourth_tracker">
                <div className="tracker_select second_tracker-selects">
                    <div className="tracker_select_column">
                        <Select
                            value={font}
                            arr={fonts}
                            css_class="second_tracker_select"
                            changeStyle={this.changeFont}
                        />
                        <Select
                            value={color_font}
                            arr={colors_fonts}
                            css_class="second_tracker_select"
                            changeStyle={this.changeFontColor}
                        />
                        <Select
                            value={color_background}
                            arr={colors_background}
                            css_class="second_tracker_select"
                            changeStyle={this.changeBackgroundColor}
                        />
                        {icons_title &&
                            <Select
                                value={title_icon}
                                arr={icons}
                                css_class="second_tracker_select"
                                changeStyle={this.changeTitleIcon}
                            />
                        }
                    </div>
                    <div className="tracker_select_column">
                        <Input
                            checked={eng_days}
                            wrapper_css="label_input"
                            input_name="days"
                            input_type="checkbox"
                            label="Дни недели на русском"
                            value={eng_days}
                            changeStyle={this.switchDays}
                        />
                        <Input
                            checked={border_trackers}
                            wrapper_css="label_input"
                            input_name="tracker_border"
                            input_type="checkbox"
                            label="Наличие рамки у заголовков треккеров"
                            changeStyle={this.switchBorders}
                        />
                        <Input
                            checked={icons_title}
                            wrapper_css="label_input"
                            input_name="icons"
                            input_type="checkbox"
                            label="Значки у типов треккеров"
                            changeStyle={this.switchIcons}
                        />
                    </div>
                </div>
                <div className={`titles ${color_background}`}>
                    <div className={`title_text ${font} ${color_font}`} contentEditable>Кликните, чтобы изменить текст</div>
                    <div className={`title_text ${font} ${color_font}`} contentEditable>Кликните, чтобы изменить текст</div>
                </div>
                <div className="container">
                    <div className="container_track">
                        <div className={`type_track ${color_background}`}>
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`} contentEditable>
                                Кликните, чтобы изменить текст
                            </div>
                        <FourthTrackerWeek
                            is_week_array={true}
                            week_array={eng_days ? days_of_week_en : days_of_week_rus}
                            css_week="week"
                            css_class="title_day"
                        />
                        {array_of_weeks.map(key => (
                            <FourthTrackerWeek
                                is_week_array={false}
                                key={key}
                                css_week={`week`}
                                css_class={`days`}
                            />))
                        }
                        </div>
                        <div className={`type_track ${color_background}`}>
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`} contentEditable>
                                Кликните, чтобы изменить текст
                            </div>
                            <FourthTrackerWeek
                                is_week_array={true}
                                week_array={eng_days ? days_of_week_en : days_of_week_rus}
                                css_week="week"
                                css_class="title_day"
                            />
                            {array_of_weeks.map(key => (
                                <FourthTrackerWeek
                                    is_week_array={false}
                                    key={key}
                                    css_week={`week`}
                                    css_class={`days`}
                                />))
                            }
                        </div>    
                    </div>
                    <div className={`container_track`}>
                        <div className={`type_track ${color_background}`}>
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`} contentEditable>
                                Кликните, чтобы изменить текст
                            </div>
                            <FourthTrackerWeek
                                is_week_array={true}
                                week_array={eng_days ? days_of_week_en : days_of_week_rus}
                                css_week="week"
                                css_class="title_day"
                            />
                            {array_of_weeks.map(key => (
                                <FourthTrackerWeek
                                    is_week_array={false}
                                    key={key}
                                    css_week={`week`}
                                    css_class={`days`}
                                />))
                            }
                        </div>
                        <div className={`type_track ${color_background}`}>
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`} contentEditable>
                                Кликните, чтобы изменить текст
                            </div>
                            <FourthTrackerWeek
                                is_week_array={true}
                                week_array={eng_days ? days_of_week_en : days_of_week_rus}
                                css_week="week"
                                css_class="title_day"
                            />
                            {array_of_weeks.map(key => (
                                <FourthTrackerWeek
                                    is_week_array={false}
                                    key={key}
                                    css_week={`week`}
                                    css_class={`days`}
                                />))
                            }
                        </div>
                    </div>
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