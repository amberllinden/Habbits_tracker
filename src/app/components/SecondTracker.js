import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { data_obj } from "./data/styles";
import { Select } from "./elements/Select";
import { Input } from "./elements/Input";
import { FourthTrackerWeek } from "./elements/FourthTrackerWeek";
import { Button } from "./elements/Button";

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
            first_head_txt: 'Первый блок',
            second_head_txt: 'Второй блок',
            frst_tracker: 'Первый треккер',
            scnd_tracker: 'Второй треккер',
            thrd_tracker: 'Третий треккер',
            frth_tracker: 'Четвертый треккер',            
            anchor: '#'
        }
        this.switchDays = this.switchDays.bind(this);
        this.switchBorders = this.switchBorders.bind(this);
        this.switchIcons = this.switchIcons.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.changeFontColor = this.changeFontColor.bind(this);
        this.changeTitleIcon = this.changeTitleIcon.bind(this);
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
        this.changeFirstTitle = this.changeFirstTitle.bind(this);
        this.changeSecondTitle = this.changeSecondTitle.bind(this);
        this.changeFrstTrackerTitle = this.changeFrstTrackerTitle.bind(this);
        this.changeScndTrackerTitle = this.changeScndTrackerTitle.bind(this);
        this.changeThrdTrackerTitle = this.changeThrdTrackerTitle.bind(this);
        this.changeFthTrackerTitle = this.changeFthTrackerTitle.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.eng_days !== prevState.eng_days || this.state.border_trackers !== prevState.border_trackers ||
            this.state.icons_title !== prevState.icons_title || this.state.font !== prevState.font ||
            this.state.color_font !== prevState.color_font || this.state.title_icon !== prevState.title_icon ||
            this.state.color_background !== prevState.color_background || this.state.first_head_txt !== prevState.first_head_txt ||
            this.state.second_head_txt !== prevState.second_head_txt || this.state.frst_tracker !== prevState.frst_tracker ||
            this.state.scnd_tracker !== prevState.scnd_tracker || this.state.thrd_tracker !== prevState.thrd_tracker ||
            this.state.frth_tracker !== prevState.frth_tracker) {
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

    changeFirstTitle(event) {
        this.setState({ first_head_txt: event.target.value })
    }

    changeSecondTitle(event) {
        this.setState({ second_head_txt: event.target.value })
    }

    changeFrstTrackerTitle(event) {
        this.setState({ frst_tracker: event.target.value })
    }

    changeScndTrackerTitle(event) {
        this.setState({ scnd_tracker: event.target.value })
    }

    changeThrdTrackerTitle(event) {
        this.setState({ thrd_tracker: event.target.value })
    }

    changeFthTrackerTitle(event) {
        this.setState({ frth_tracker: event.target.value })
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
            anchor,
            first_head_txt,
            second_head_txt,
            frst_tracker,
            scnd_tracker,
            thrd_tracker,
            frth_tracker,
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
                <div data-html2canvas-ignore className="tracker_select second_tracker-selects">
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
                        <Input
                            type="text"
                            value={first_head_txt}
                            changeStyle={this.changeFirstTitle}
                            wrapper_css="label_input"
                            label="Текст в первом блоке"
                        />

                        <Input
                            value={second_head_txt}
                            changeStyle={this.changeSecondTitle}
                            wrapper_css="label_input"
                            label="Текст во втором блоке"
                        />
                        <Input
                            value={frst_tracker}
                            changeStyle={this.changeFrstTrackerTitle}
                            wrapper_css="label_input"
                            label="Название треккера 1"
                        />
                        <Input
                            value={scnd_tracker}
                            changeStyle={this.changeScndTrackerTitle}
                            wrapper_css="label_input"
                            label="Название треккера 2"
                        />
                        <Input
                            value={thrd_tracker}
                            changeStyle={this.changeThrdTrackerTitle}
                            wrapper_css="label_input"
                            label="Название треккера 3"
                        />
                        <Input
                            value={frth_tracker}
                            changeStyle={this.changeFthTrackerTitle}
                            wrapper_css="label_input"
                            label="Название треккера 3"
                        />
                    </div>
                </div>
                <div className={`titles ${color_background}`}>
                    <div className={`title_text ${font} ${color_font}`}>{first_head_txt}</div>
                    <div className={`title_text ${font} ${color_font}`}>{second_head_txt}</div>
                </div>
                <div className="container">
                    <div className="container_track">
                        <div className={`type_track ${color_background}`}>
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`}>
                                {frst_tracker}
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
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`}>
                                {scnd_tracker}
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
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`}>
                                {thrd_tracker}
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
                            <div className={`title_type ${font} ${color_font} ${!border_trackers ? 'no_border' : ''} ${icons_title ? title_icon : ''}`}>
                                {frth_tracker}
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
                <Button
                    css_class={"download_button"}
                    text={"DOWNLOAD TRACKER"}
                    file_name={"my_tracker.png"}
                    attrs={{ "data-html2canvas-ignore": true }}
                    anc={anchor}
                />
            </section>
        )
    }
}