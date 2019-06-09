import React, { Component } from 'react';

import './Calendar.css'

import Controls from './Controls/Controls'
import Schedule from './Schedule/Schedule'

class Calendar extends Component {
    render() {
        return (
            <React.Fragment>

                <Controls />

                <section className="week-days">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                </section>

                <Schedule />

            </React.Fragment>
        );
    }
}

export default Calendar;