import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3313',
})

export default api;