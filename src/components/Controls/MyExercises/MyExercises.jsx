import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MyExercises.css';
import * as kinveySetup from '../../../services/kinveySetup';
import Exercise from './Exercise/Exercise';

const MyExercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Kinvey ${localStorage.getItem('authtoken')}`;
        axios.get(kinveySetup.baseUrl + "appdata/" + kinveySetup.appKey + "/activities").then(response => {
            setExercises(response.data);
        });
    }, []);

    return (
        <section className="my-exercises-list">
            <h2>My exercises</h2>
            <div>
                { exercises.map(x => {
                    return <Exercise key={x._id} data={x} />
                })}
            </div>
        </section>
    )
};

export default MyExercises;
