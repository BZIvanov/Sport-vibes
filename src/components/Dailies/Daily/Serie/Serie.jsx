import React from 'react';

import './Serie.css';

const Serie = (props) => {
    
    let classes = ['repeats-value', props.isCompleted ? 'completed' : ''];
    return (
        <div className={classes.join(' ')} onClick={props.onCompleted}>
            <span>{props.val}</span>
        </div>
    )
};

export default Serie;
