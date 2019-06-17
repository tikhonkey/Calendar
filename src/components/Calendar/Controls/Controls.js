import React, { Component } from 'react';
import './Controls.css'

class Controls extends Component {

    render() {
        const settings = this.props.getSettings;
        const changeValue = event => {
            const value = parseInt(event.target.value);
            this.props.setSettings([
                value < 12 ? value : settings[0],
                value > 12 ? value : settings[1]
            ]);
        };

        return (
            <header>
                <form name="month" className="month">
                    <select value={settings[0]} onChange={changeValue}>
                        <option value='0'>January</option>
                        <option value='1'>February</option>
                        <option value='2'>March</option>
                        <option value='3'>April</option>
                        <option value='4'>May</option>
                        <option value='5'>June</option>
                        <option value='6'>July</option>
                        <option value='7'>August</option>
                        <option value='8'>September</option>
                        <option value='9'>October</option>
                        <option value='10'>November</option>
                        <option value='11'>December</option>
                    </select>
                </form>
                <form name="year" className="year">
                    <select value={settings[1]} onChange={changeValue}>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>
                </form>
            </header>
        )
    }
}

export default Controls;