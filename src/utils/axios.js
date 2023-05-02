import axios from 'axios';

function init() {
    const token = localStorage.getItem('token');
    const headers = {};

    if (token) {
        headers.authorization = `Bearer ${token}`;
    }

    return axios.create({
        baseURL: 'https://fsa-api-b4.onrender.com',
        headers
    });
};

export default init;
