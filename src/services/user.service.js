import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http:/localhost:8080/api';

class UserService {
    getUserProfile() {
        var config = {
            method: 'get',
            url: API_URL + "/profile",
            headers: authHeader()
        };

        return axios(config)
    }

    getCars() {
        var config = {
            method: 'get',
            url: API_URL + "/cars",
            header: authHeader()
        }

        return axios(config);
    }

    getClients() {
        var config = {
            method: 'get',
            url: API_URL + "/clients",
            header: authHeader()
        }

        return axios(config);
    }
}

export default new UserService();