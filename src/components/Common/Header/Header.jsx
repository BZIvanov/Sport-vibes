import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import AuthContext from '../../../context/auth-context';

const Navigation = () => {
    const auth = useContext(AuthContext);

    const user = (
        <ul>
            <li>Welcome {localStorage.getItem('username')}!</li>
            <li><Link to="/user/logout">Logout</Link></li> 
        </ul>
    );
    const noUser = (
        <ul>
            <li><Link to="/user/login">Login</Link></li>
            <li><Link to="/user/register">Register</Link></li>
        </ul>
    );
    
    return (
        <nav className="site-navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            {auth.status ? user : noUser}
        </nav>
    )
};

export default Navigation;
