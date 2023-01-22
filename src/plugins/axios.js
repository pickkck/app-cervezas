import axios from 'axios'
import store from '../store/index'

axios.interceptors.request.use((config) => {
    config.baseURL = 'https://api.punkapi.com/v2';
    
    store.dispatch('beers/setLoader', true);
    return config;
})

axios.interceptors.response.use((response) => {

    store.dispatch('beers/setLoader', false);
    return response
})
