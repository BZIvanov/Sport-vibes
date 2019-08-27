import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MyExercises.css';
import * as kinveySetup from '../../../services/kinveySetup';
import Exercise from './Exercise/Exercise';
import Loading from '../../UI/Loading/Loading';

const MyExercises = () => {
    const [exercises, setExercises] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Kinvey ${localStorage.getItem('authtoken')}`;
        axios.get(kinveySetup.baseUrl + "appdata/" + kinveySetup.appKey + "/activities").then(response => {
            setExercises(response.data);
            setIsLoaded(true);
        });
    }, []);

    let dataToDisplay = isLoaded ? 
        exercises
            .filter(e => e._acl.creator === localStorage.getItem('userID'))
            .map(x => <Exercise key={x._id} data={x} />) : 
        <Loading />;

    return (
        <section className="my-exercises-list">
            <h2>My exercises</h2>
            <div>
                {dataToDisplay}
            </div>
        </section>
    )
};

export default MyExercises;
