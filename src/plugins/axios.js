import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = 'https://api.punkapi.com/v2';

    return config;
})

