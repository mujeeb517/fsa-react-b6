import axios from 'axios';

const token = localStorage.getItem('token');
const headers = {};

if (token) {
    headers.authorization = `Bearer ${token}`;
}

export default axios.create({
    baseURL: 'https://fsa-api-b4.onrender.com',
    headers
});