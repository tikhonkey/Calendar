import React from 'react';
import './Schedule.css'

import Cell from './Cell/Cell'

const Schedule = (props) => {

    const settings = props.getSettings;

    const today = props.date.getDate(),
        days = new Date(settings[1], settings[0] + 1, 0).getDate(),
        calendarStart = new Date(settings[1], settings[0], 0).getDay(),
        isCurrentYear = settings[1] === new Date().getFullYear(),
        isCurrentMonth = settings[0] === new Date().getMonth();

    console.log(isCurrentYear, isCurrentMonth, today, days, calendarStart);

    let output = [];

    for (let i = 0; i < calendarStart + days; i ++ ) {
        if (i < calendarStart) {
            output.push( <Cell type='empty-cell' key={i} /> );
        } else {
            output.push( <Cell type='day' key={i} index={i - calendarStart + 1} /> );
        }
    }

    return (
        <section className="calendar">
            {output}
        </section>
    );
};

export default Schedule;