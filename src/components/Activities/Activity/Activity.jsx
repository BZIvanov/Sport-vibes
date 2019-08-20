import React from 'react';

import './Activity.css';

const Activity = (props) => {

    let classes = [props.data.difficulty, 'activity', props.isSelected]
    return (
        <article className={classes.join(' ')} onClick={() => props.chosen(props.data._id)}>
            <img src={props.data.imageUrl} alt="exercise" />
            <h3>{props.data.title}</h3>
        </article>
    )
};

export default Activity;
