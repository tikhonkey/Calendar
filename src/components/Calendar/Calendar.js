import React, { useState } from 'react';
import './Calendar.css'

import Controls from './Controls/Controls'
import Weekdays from './Weekdays/Weekdays'
import Schedule from './Schedule/Schedule'

const Calendar = () => {

    let date = new Date(),
        [getSettings, setSettings] = useState([date.getMonth(), date.getFullYear()]);

    return (
        <React.Fragment>
            <Controls getSettings={getSettings} setSettings={setSettings}/>
            <Weekdays/>
            <Schedule date={date} getSettings={getSettings}/>
        </React.Fragment>
    );
};

export default Calendar;