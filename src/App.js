import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import RegisterForm from './components/User/RegisterForm/RegisterForm';
import NotFound from './components/Common/NotFound/NotFound';
import LoginForm from './components/User/LoginForm/LoginForm';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/user/register" component={RegisterForm} />
        <Route path="/user/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
