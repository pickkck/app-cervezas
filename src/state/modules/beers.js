import axios from 'axios'

export default {
    namespaced: true,
    state: {
        beers: [],
        pagination: {
            per_page: 12,
            page: 1,
            total: 0
        },
        filters: {
            beer_name: "",
            brewed_after: "",
            brewed_before: "",
        },
        is_loading: false,
        show_dialog: false
    },
    getters: {
        getCurrentPage(state){
            return state.pagination.page;
        },
        getTotalPages(state){
            return Math.ceil(state.pagination.total / state.pagination.per_page)
        },
        getCurrentSearch(state){
            return state.filters.beer_name;
        },
        getShowDialog(state){
            return state.show_dialog;
        },
        getFrom(state){
            return state.filters.brewed_after;
        },
        getTo(state){
            return state.filters.brewed_before;
        },
    },
    mutations: {
        SET_ALL_BEERS: (state, beers) => {
            state.beers = beers
        },
        SET_TOTAL_BEERS: (state, total_beers) => {
            state.pagination.total = total_beers
        },
        SET_PAGE: (state, page) => {
            state.pagination.page = page
        },
        SET_SEARCH: (state, search) => {
            state.filters.beer_name = search
        },
        SET_LOADER: (state, is_loading) => {
            state.is_loading = is_loading
        },
        SET_SHOW_DIALOG: (state, show_dialog) => {
            state.show_dialog = show_dialog
        },
        SET_FILTERS_EMPTY: (state, filters_reset) => {
            state.filters = {...filters_reset}
        },
        SET_DATES: (state, dates) => {
            state.filters.brewed_after = dates[0]
            state.filters.brewed_before = dates[1]
        },
    },
    actions: {
        async fetchBeers({ commit, state }) {
            let filters_apply = {};
            for (const filter in state.filters){
                if(state.filters[filter]){
                    filters_apply[filter] = state.filters[filter];
                }
            }
            await axios.get('/beers',{ params: {...state.pagination, ...filters_apply} }).
                    then((beers) => {
                        commit('SET_ALL_BEERS', beers.data);
                    }).
                    catch(error => console.log(error));
            await axios.get('/beers',{ params: {per_page: 80, ...filters_apply} }).
                    then((allBeers) => {
                        commit('SET_TOTAL_BEERS', allBeers.data.length);
                    }).
                    catch(error => console.log(error));
        },
        async resetFilters({ commit, state }) {
            let filters_reset = {};
            for (const filter in state.filters){
                filters_reset[filter] = "";
            }
            commit('SET_FILTERS_EMPTY', filters_reset);
        },
        async setPage({ commit }, page) {
            await commit('SET_PAGE', page);
        },
        async setSearch({ commit }, search) {
            await commit('SET_SEARCH', search);
        },
        async setLoader({ commit }, is_loading) {
            await commit('SET_LOADER', is_loading);
        },
        async setShowDialog({ commit }, show_dialog) {
            await commit('SET_SHOW_DIALOG', show_dialog);
        },
        async setDates({ commit }, dates) {
            await commit('SET_DATES', dates);
        },
    }
}
