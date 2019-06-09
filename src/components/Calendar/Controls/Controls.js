import React from 'react';

import './Controls.css'

const Controls = () => {

    return (
        <header>

            <form name="month" className="month">
                <select onChange="changeMonth(this.value)">
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
                <select onChange="changeYear(this.value)">
                    <option name='y2018' value="2018">2018</option>
                    <option name='y2019' value="2019">2019</option>
                    <option name='y2020' value="2020">2020</option>
                </select>
            </form>

        </header>
    )
};

export default Controls;