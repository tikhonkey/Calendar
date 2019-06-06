import React, { Component } from 'react';

// import classes from './Calendar.css'

import Aux from '../../hoc/Auxy'
import Controls from './Controls/Controls'
import Schedule from './Schedule/Schedule'

class Calendar extends Component {
    render() {
        return (
            <Aux>
                <Controls />
                <Schedule />
            </Aux>
        );
    }
}

export default Calendar;