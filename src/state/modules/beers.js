import axios from 'axios'

export default {
    namespaced: true,
    state: {
        beers: [],
    },
    getters: {

    },
    mutations: {
        SET_ALL_BEERS: (state, beers) => {
            state.beers = beers
        },
    },
    actions: {
        async getAllBeers({ commit }) {
            const response = await axios.get('/beers');
            commit('SET_ALL_BEERS', response.data);
        },
    }
}
