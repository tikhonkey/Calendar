import React, { useState } from 'react';

// import classes from './Controls.css'

const Controls = () => {

    const controlsState = useState('1');

    return <div> Controls {controlsState[0]} </div>
};

export default Controls;