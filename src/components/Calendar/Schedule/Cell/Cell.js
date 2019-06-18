import React from 'react';
import './Cell.css'

const Cell = (props) => {

    let cell = null;

    switch (props.type) {
        case ('empty-cell'):
            cell = <div className="empty_cell"> </div>;
            break;
        case ('day'):
            cell = (
                <div className={props.current + 'day'}>
                    <div className="number">
                        {props.index}
                    </div>
                </div>);
            break;
        default:
            cell = null;
    }
    return cell;
};

export default Cell;