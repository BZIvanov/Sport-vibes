import React from 'react';

import './Daily.css';

const Daily = (props) => {

    const classes = ['daily-item', 'd-' + props.data.difficulty]
    return (
        <article className={classes.join(' ')}>
            <h1>{props.data.title}</h1>
        </article>
    )
};

export default Daily;
