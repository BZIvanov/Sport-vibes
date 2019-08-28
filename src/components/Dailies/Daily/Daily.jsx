import React, { useState } from 'react';

import './Daily.css';
import Serie from './Serie/Serie';

const Daily = (props) => {
    const [completed, setCompleted] = useState([...Array(props.data.series).keys()].map(x => false));

    const handleCompleted = (idx) => {
        const arr = [...completed];
        arr[idx] = !completed[idx];
        setCompleted(arr);

        if (arr.filter(x => !x).length === 0) {
            props.onFinished();
        }
    };
    
    const classes = ['daily-item', 'd-' + props.data.difficulty];
    return (
        <article className={classes.join(' ')}>
            <h1>{props.data.title}</h1>
            <img src={props.data.imageUrl} alt="daily item"/>
            <p>{props.data.series} series, {props.data.repeats} repeats!</p>
            <div className="series-items">
                {[...Array(props.data.series).keys()].map((x, i) => 
                    <Serie key={i} val={props.data.repeats} onCompleted={() => handleCompleted(i)} isCompleted={completed[i]} />)
                }
            </div>
        </article>
    )
};

export default Daily;
