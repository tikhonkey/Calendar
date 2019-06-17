import React, { Component } from 'react';

import './Schedule.css'

class Schedule extends Component {
    render() {

        const settings = this.props.getSettings;

        return (
            <p> {settings[0]}, {settings[1]} </p>
        );
    }
}

export default Schedule;