import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as kinveySetup from '../../../../services/kinveySetup';
import './ExerciseDetails.css';

const ExerciseDetails = (props) => {
    const [exercise, setExercise] = useState({});

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Kinvey ${localStorage.getItem('authtoken')}`;
        axios.get(kinveySetup.baseUrl + "appdata/" + kinveySetup.appKey + "/activities/" + props.match.params.id).then(response => {
            console.log(response)
            setExercise(response.data);
        });
    }, [props.match.params.id]);

    return (
        <section className="exercise-details">
            <h1>{exercise.title}</h1>
            <div>
                <img src={exercise.imageUrl} alt="exercise-details"/>
                <div className="on-right">
                    <p>Repeats: {exercise.repeats}</p>
                    <p>Difficulty: {exercise.difficulty}</p>
                    <div className="button-controls">
                        <button className="info-btn">Edit</button>
                        <button className="danger-btn">Delete</button>
                    </div>
                </div>
            </div>
        </section>
        
    )
};

export default ExerciseDetails;
