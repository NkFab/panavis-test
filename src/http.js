import axios from 'axios';
const { BASE_URL } = process.env;

const http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
});

export default http;