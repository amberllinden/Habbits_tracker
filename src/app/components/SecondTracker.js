import React, { Component } from "react";
import { data_obj } from "./data/styles";

export class SecondTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_circles: '',
            first_lines: '',
            second_lines: '',
            center_circle: '',
        }

        this.changeColorLine = this.changeColorLine.bind(this);
    }

    changeColorLine(event) {
        if (event.target.id == 'first_circles')
            event.target.value == '0' ? this.setState({ first_circles: '' }) : this.setState({ first_circles: event.target.value })
        if (event.target.id == 'first_lines')
            event.target.value == '0' ? this.setState({ first_lines: '' }) : this.setState({ first_lines: event.target.value })  
        if (event.target.id == 'second_lines')
            event.target.value == '0' ? this.setState({ second_lines: '' }) : this.setState({ second_lines: event.target.value }) 
        if (event.target.id == 'center_circle')
            event.target.value == '0' ? this.setState({ center_circle: '' }) : this.setState({ center_circle: event.target.value })                
    }

    render() {
        let { first_circles, first_lines, second_lines, center_circle } = this.state;
        const { colors_fonts } = data_obj; 

        return (
            <section className="second_tracker">
                <div className="second_tracker-selects">
                    <select id="first_circles" value={first_circles} onChange={this.changeColorLine} className="second_tracker_select">
                        {
                            colors_fonts.map((colors_font, index) => <option key={index} value={colors_font.value}>{colors_font.name}</option>)
                        }
                    </select>
                    <select id="first_lines" value={first_lines} onChange={this.changeColorLine} className="second_tracker_select">
                        {
                            colors_fonts.map((colors_font, index) => <option key={index} value={colors_font.value}>{colors_font.name}</option>)
                        }
                    </select>
                    <select id="second_lines" value={second_lines}  onChange={this.changeColorLine} className="second_tracker_select">
                        {
                            colors_fonts.map((colors_font, index) => <option key={index} value={colors_font.value}>{colors_font.name}</option>)
                        }
                    </select>
                    <select id="center_circle" value={center_circle}  onChange={this.changeColorLine} className="second_tracker_select">
                        {
                            colors_fonts.map((colors_font, index) => <option key={index} value={colors_font.value}>{colors_font.name}</option>)
                        }
                    </select>
                </div> 
                <svg version="1.1" baseProfile="full" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                    <g className={`second_tracker--first_circle_group ${first_circles}-first`}>
                        <circle cx='250' cy='250' r='250'></circle>
                        <circle cx='250' cy='250' r='230'></circle>
                        <circle cx='250' cy='250' r='210'></circle>
                        <circle cx='250' cy='250' r='190'></circle>
                        <circle cx='250' cy='250' r='170'></circle>
                        <circle cx='250' cy='250' r='150'></circle>
                        <circle cx='250' cy='250' r='130'></circle>
                        <circle cx='250' cy='250' r='110'></circle>
                        <circle cx='250' cy='250' r='90'></circle>
                        <circle cx='250' cy='250' r='70'></circle>
                    </g>
                    <g className={`second_tracker--first_line_group ${first_lines}-first`}>
                        <line x1="73" x2="427" y1="73" y2="427"></line>
                        <line x1="73" x2="427" y1="427" y2="73"></line>
                        <line x1="0" x2="500" y1="250" y2="250"></line>
                        <line x1="250" x2="250" y1="0" y2="500"></line>
                        <line x1="250" x2="365" y1="250" y2="473"></line>
                        <line x1="365" x2="137" y1="27" y2="473"></line>
                        <line x1="35" x2="465" y1="125" y2="375"></line>
                        <line x1="33" x2="467" y1="373" y2="127"></line>
                    </g>
                    <polyline className="second_tracker--polyline" points="63,63 250,250 250,-50"></polyline>
                    <g className={`second_tracker--second_line_group ${second_lines}-first`}>
                        <line x1="100" x2="250" y1="20" y2="20"></line>
                        <line x1="115" x2="250" y1="40" y2="40"></line>
                        <line x1="125" x2="250" y1="60" y2="60"></line>
                        <line x1="135" x2="250" y1="80" y2="80"></line>
                        <line x1="145" x2="250" y1="100" y2="100"></line>
                        <line x1="155" x2="250" y1="120" y2="120"></line>
                        <line x1="165" x2="250" y1="140" y2="140"></line>
                        <line x1="175" x2="250" y1="160" y2="160"></line>
                        <line x1="185" x2="250" y1="180" y2="180"></line>
                    </g>
                    <circle className={`second_tracker--center_circle ${center_circle}-center_circle`} cx='250' cy='250' r='50'></circle>
                </svg>
            </section>
        )
    }
}