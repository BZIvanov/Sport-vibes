import React, { useState } from 'react';

import './RegisterForm.css';
import { UserHandler } from '../../../services/userSetup';

const RegisterForm = (props) => {
    const [username, setUsername] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [email, setEmail] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [password, setPassword] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [repeatPassword, setrepeatPassword] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername({
                ...username,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        } else if (event.target.name === 'email') {
            setEmail({
                ...email,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        } else if (event.target.name === 'password') {
            setPassword({
                ...password,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        } else if (event.target.name === 'repeatPassword') {
            setrepeatPassword({
                ...repeatPassword,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        }
    };

    const handleFocused = (event) => {
        if (event.target.name === 'username') {
            setUsername({
                ...username,
                touched: true
            });
        } else if (event.target.name === 'email') {
            setEmail({
                ...email,
                touched: true
            });
        } else if (event.target.name === 'password') {
            setPassword({
                ...password,
                touched: true
            });
        } else if (event.target.name === 'repeatPassword') {
            setrepeatPassword({
                ...repeatPassword,
                touched: true
            });
        }
    }

    const checkValidity = (inputName, inputValue) => {
        if (inputValue === '') {
            return "Value is required!";
        }
        if ((inputName === 'username' || inputName === 'password' || inputName ==='repeatPassword') && inputValue.length < 3) {
            return "At least 3 symbols are required";
        } else if (inputName === 'email' && !/^[^@]+@[^@]+\.[^@]+$/.test(inputValue)) {
            return "Please provide a valid e-mail";
        }
        return '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if ((username.errorMsg === '' && username.touched) && (email.errorMsg === '' && email.touched) &&
        (password.errorMsg === '' && password.touched) && (repeatPassword.errorMsg === '' && repeatPassword.touched)) {
            let userHandler = new UserHandler();
            userHandler.registerUser({
                username: username.val, 
                email: email.val, 
                password: password.val
            }).then(response => {
                props.history.push('/user/login');
            });
        }
    };

    return (
        <div className="user-form">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className={(username.notCorrect || username.touched) ? '' : 'error'} 
                    type="text" 
                    name="username" 
                    placeholder="Your username" 
                    onChange={handleInputChange}
                    onFocus={handleFocused} />
                {username.errorMsg ? <p className="errorMsg">{username.errorMsg}</p> : null}
                
                <input 
                    className={(email.notCorrect || email.touched) ? '' : 'error'} 
                    type="email" 
                    name="email" 
                    placeholder="Your e-mail" 
                    onChange={handleInputChange}
                    onFocus={handleFocused} />
                {email.errorMsg ? <p className="errorMsg">{email.errorMsg}</p> : null}

                <input
                    className={(password.notCorrect || password.touched) ? '' : 'error'}
                    type="password" 
                    name="password" 
                    placeholder="Your password" 
                    onChange={handleInputChange} />
                {password.errorMsg ? <p className="errorMsg">{password.errorMsg}</p> : null}

                <input
                    className={(repeatPassword.notCorrect || repeatPassword.touched) ? '' : 'error'}
                    type="password" 
                    name="repeatPassword" 
                    placeholder="Repeat password" 
                    onChange={handleInputChange} />
                {repeatPassword.errorMsg ? <p className="errorMsg">{repeatPassword.errorMsg}</p> : null}

                <button>Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
