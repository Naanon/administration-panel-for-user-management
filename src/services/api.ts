import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb',
})

export default api;