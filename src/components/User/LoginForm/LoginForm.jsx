import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import './LoginForm.css';
import { UserHandler } from '../../../services/userSetup';
import AuthContext from '../../../context/auth-context';

const LoginForm = () => {
  const auth = useContext(AuthContext);

  const [username, setUsername] = useState({
    val: '',
    touched: false,
    notCorrect: true,
    errorMsg: '',
  });
  const [password, setPassword] = useState({
    val: '',
    touched: false,
    notCorrect: true,
    errorMsg: '',
  });
  const [user, setUser] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.name === 'username') {
      setUsername({
        ...username,
        val: event.target.value,
        errorMsg: checkValidity(event.target.name, event.target.value),
      });
    } else if (event.target.name === 'password') {
      setPassword({
        ...username,
        val: event.target.value,
        errorMsg: checkValidity(event.target.name, event.target.value),
      });
    }
  };

  const handleFocused = (event) => {
    if (event.target.name === 'username') {
      setUsername({
        ...username,
        touched: true,
      });
    } else if (event.target.name === 'password') {
      setPassword({
        ...username,
        touched: true,
      });
    }
  };

  const checkValidity = (inputName, inputValue) => {
    if (inputValue === '') {
      return 'Value is required!';
    }
    if (
      (inputName === 'username' ||
        inputName === 'password' ||
        inputName === 'repeatPassword') &&
      inputValue.length < 3
    ) {
      return 'At least 3 symbols are required';
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      username.errorMsg === '' &&
      username.touched &&
      password.errorMsg === '' &&
      password.touched
    ) {
      let userHandler = new UserHandler();
      userHandler
        .loginUser({
          username: username.val,
          password: password.val,
        })
        .then((response) => {
          toast.success(`Welcome ${response.data.username}`);
          userHandler.saveToSession(response['data']);
          setUser(true);
          auth.login();
        })
        .catch((error) => {
          toast.error(error.response.data.description);
        });
    }
  };

  return (
    <div className='user-form'>
      {user ? <Redirect to='/home' /> : null}
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={username.notCorrect || username.touched ? '' : 'error'}
          type='text'
          name='username'
          placeholder='Your username'
          onChange={handleInputChange}
          onFocus={handleFocused}
        />
        {username.errorMsg ? (
          <p className='errorMsg'>{username.errorMsg}</p>
        ) : null}

        <input
          className={password.notCorrect || password.touched ? '' : 'error'}
          type='password'
          name='password'
          placeholder='Your password'
          onChange={handleInputChange}
        />
        {password.errorMsg ? (
          <p className='errorMsg'>{password.errorMsg}</p>
        ) : null}

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
