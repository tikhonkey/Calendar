import React, { useState } from 'react';
import './Calendar.css'

import Controls from './Controls/Controls'
import Schedule from './Schedule/Schedule'

const Calendar = () => {

    let date = new Date(),
        [getSettings, setSettings] = useState([date.getMonth(), date.getFullYear()]);

    return (
        <React.Fragment>

            <Controls getSettings={getSettings} setSettings={setSettings}/>

            <section className="week-days">
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
            </section>

            <Schedule date={date} getSettings={getSettings}/>

        </React.Fragment>
    );
};

export default Calendar;