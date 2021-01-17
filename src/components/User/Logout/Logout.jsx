import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import * as kinveySetup from '../../../services/kinveySetup';
import AuthContext from '../../../context/auth-context';

const Logout = () => {
  const auth = useContext(AuthContext);
  axios.defaults.headers.common[
    'Authorization'
  ] = `Kinvey ${localStorage.getItem('authtoken')}`;
  axios
    .post(kinveySetup.baseUrl + 'user/' + kinveySetup.appKey + '/_logout')
    .then((res) => {
      localStorage.clear();
      toast.success('Succesfully logged out!');
      auth.logout();
    })
    .catch((err) => {
      console.log('Logout error:', err);
    });

  return <Redirect to='/' />;
};

export default Logout;
