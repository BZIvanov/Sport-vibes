import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import AuthContext from './context/auth-context';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import RegisterForm from './components/User/RegisterForm/RegisterForm';
import LoginForm from './components/User/LoginForm/LoginForm';
import NotFound from './components/Common/NotFound/NotFound';

const App = () => {
  const [authStatus, setAuthStatus] = useState(localStorage.getItem('username') ? true: false);

  const login = () => {
    setAuthStatus(localStorage.getItem('username') ? true: false)
  }

  return (
    <AuthContext.Provider value={{status: authStatus, login: login}}>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/user/register" component={RegisterForm} />
          <Route path="/user/login" component={LoginForm} />} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
