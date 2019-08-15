import axios from 'axios';

import * as kinveySetup from './services/kinveySetup';

const instance = axios.create();
instance.defaults.headers.common['Authorization'] = `Basic ${btoa(`${kinveySetup.appKey}:${kinveySetup.appSecret}`)}`;

export default instance;
