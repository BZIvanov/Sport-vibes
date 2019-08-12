import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import RegisterForm from './components/RegisterForm/RegisterForm';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/user/register" component={RegisterForm} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
