import React from 'react';
import './Schedule.css'

const Schedule = (props) => {

    const settings = props.getSettings;

    const today = props.date.getDate(),
        days = new Date(settings[1], settings[0] + 1, 0).getDate(),
        monthBegin = new Date(settings[1], settings[0], 1).getDay();

    return (
        <React.Fragment>
            <p>today is {today}, {settings[0] + 1}, {settings[1]}</p>
            <p> {days} days in month, {monthBegin} is month begin day</p>
        </React.Fragment>
    );

};

export default Schedule;