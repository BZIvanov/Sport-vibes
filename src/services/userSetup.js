import axios from '../axiosNonUser';

import * as kinveySetup from './kinveySetup';

export class UserHandler {
    registerUser(userData) {
        return axios.post(kinveySetup.baseUrl + "user/" + kinveySetup.appKey + "/", userData);
    }
}