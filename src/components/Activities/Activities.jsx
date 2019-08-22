import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ListContext from '../../context/list-context';
import './Activities.css';
import * as kinveySetup from '../../services/kinveySetup';
import Activity from './Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [list, setList] = useState([]);

    const [state, dispatch] = useContext(ListContext);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Kinvey ${localStorage.getItem('authtoken')}`;
        axios.get(kinveySetup.baseUrl + "appdata/" + kinveySetup.appKey + "/activities").then(response => {
            setActivities(response.data);
        });
    }, []);

    const addToList = (id) => {
        let idsList = [...list];
        let target = idsList.indexOf(id);
        if (target !== -1) {
            idsList = idsList.filter(x => x !== id);
        } else {
            idsList = idsList.concat(id);
        }
        setList(idsList)
    }

    const setToContext = () => {
        let acts = [];
        activities.map(x => {
            if (list.indexOf(x._id) > -1) {
                let tempObj = {
                    difficulty: x.difficulty,
                    imageUrl: x.imageUrl,
                    repeats: x.repeats,
                    id: x._id,
                    title: x.title
                };
                acts = acts.concat(tempObj);
            }
            return x;
        });

        dispatch({ type: 'addToList', payload: acts });
    }

    return (
        <React.Fragment>
            <section className="titles">
                <h4>Full exercises list</h4>
                {list.length > 0 ? <h3>Selected exrecises</h3> : null}
            </section>
            <section className="selection">
                <div className="full-list">
                    {activities.map(x => {
                        let isSel = '';
                        if (list.indexOf(x._id) > -1) {
                            isSel = 'selected';
                        }
                        return <Activity key={x._id} data={x} chosen={addToList} isSelected={isSel} />
                    })}
                </div>
                {
                    list.length > 0 ?
                        <div className="my-list">
                            <Link to="/user/register"><button onClick={setToContext}>Continue</button></Link>
                            {activities.filter(x => list.indexOf(x._id) > -1).map(y => {
                                let isSel = 'selected';
                                return <Activity key={y._id} data={y} chosen={addToList} isSelected={isSel} />
                            })
                            }
                        </div> :
                        null
                }
            </section>
        </React.Fragment>
    )
}

export default Activities;
