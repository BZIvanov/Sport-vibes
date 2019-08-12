import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Navigation = () => {
    return (
        <nav className="site-navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/user/login">Login</Link>
                </li>
                <li>
                    <Link to="/user/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
