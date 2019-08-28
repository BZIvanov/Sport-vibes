import React, { useContext } from 'react';

import ListContext from '../../context/list-context';
import Daily from './Daily/Daily';

const Dailies = (props) => {
    const [state, dispatch] = useContext(ListContext);
    
    return (
        <section>
            { state.list.map(x => <Daily key={x.id} data={x} />) }
        </section>
    )
};

export default Dailies;
