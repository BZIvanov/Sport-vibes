import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';
import AuthContext from '../../../context/auth-context';

const Navigation = () => {
    const auth = useContext(AuthContext);

    const leftNavUser = (
        <ul>
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/user/add">Add New Exercise</NavLink></li>
        </ul>
    );

    const leftNavNoUser = (
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
    );

    const rightNavUser = (
        <ul>
            <li>Welcome {localStorage.getItem('username')}!</li>
            <li><Link to="/user/logout">Logout</Link></li> 
        </ul>
    );
    const rightNavNoUser = (
        <ul>
            <li><Link to="/user/login">Login</Link></li>
            <li><Link to="/user/register">Register</Link></li>
        </ul>
    );
    
    return (
        <nav className="site-navigation">
            {auth.status ? leftNavUser : leftNavNoUser}

            {auth.status ? rightNavUser : rightNavNoUser}
        </nav>
    )
};

export default Navigation;
