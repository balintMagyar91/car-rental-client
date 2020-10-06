import axios from 'axios';

const API_URL = "http://localhost:8080/oauth/token";

class AuthService {
    
    login(username, password) {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'username': username,
           'password': password,
           'grant_type': 'password' 
            });

        var config = {
            method: 'post',
            url: API_URL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: 'car-rental-client',
                password: 'car-rental-secret'
            },
            data: data
        }
        return axios(config)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();