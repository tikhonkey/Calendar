import React, { Component } from 'react';

// import classes from './Calendar.css'

import Controls from './Controls/Controls'
import Schedule from './Schedule/Schedule'

class Calendar extends Component {
    render() {
        return (
            <React.Fragment>
                <Controls />
                <Schedule />
            </React.Fragment>
        );
    }
}

export default Calendar;