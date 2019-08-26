import React, { useState, useReducer } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AuthContext from './context/auth-context';
import ListContext from './context/list-context';
import reducer from './context/list-reducer';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import RegisterForm from './components/User/RegisterForm/RegisterForm';
import LoginForm from './components/User/LoginForm/LoginForm';
import Logout from './components/User/Logout/Logout';
import AddNewExercise from './components/Controls/AddNewExercise/AddNewExercise';
import MyExercises from './components/Controls/MyExercises/MyExercises';
import NotFound from './components/Common/NotFound/NotFound';

const App = () => {
  const [authStatus, setAuthStatus] = useState(localStorage.getItem('username') ? true: false);

  const login = () => {
    setAuthStatus(localStorage.getItem('username') ? true: false)
  }

  const logout = () => {
    setAuthStatus(localStorage.getItem('username') ? true: false)
  }

  return (
    <AuthContext.Provider value={{status: authStatus, login: login, logout: logout}}>
      <ListContext.Provider value={useReducer(reducer, { list: [] })}>
        <ToastContainer closeButton={false} autoClose={3000} transition={Flip} />
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/user/register" component={RegisterForm} />
            <Route path="/user/login" component={LoginForm} />
            <Route path="/user/logout" component={Logout} />
            <Route path="/user/add" component={AddNewExercise} />
            <Route path="/user/my-exercises" component={MyExercises} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ListContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
