import axiosNonUser from '../axios/axiosNonUser';

import * as kinveySetup from './kinveySetup';

export class UserHandler {
    saveToSession(userData) {
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userID', userData._id);
        localStorage.setItem('authtoken', userData._kmd.authtoken);
    };

    registerUser(userData) {
        return axiosNonUser.post(kinveySetup.baseUrl + "user/" + kinveySetup.appKey + "/", userData);
    };

    loginUser(userData) {
        return axiosNonUser.post(kinveySetup.baseUrl + "user/" + kinveySetup.appKey + "/login", userData);
    }
}
