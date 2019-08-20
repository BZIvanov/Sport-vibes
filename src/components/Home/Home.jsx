import React, { useContext } from 'react';

import './Home.css';
import AuthContext from '../../context/auth-context';
import Activities from '../Activities/Activities';

const Home = () => {
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            { auth.status ? <Activities /> : <h1>Home</h1>}
        </React.Fragment>
    );
}

export default Home;
