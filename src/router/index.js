import Vue from 'vue'

import beers from './modules/beers';
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(VueMeta, {
    // The component option name that vue-meta looks for meta info on.
    keyName: 'page',
})

const routes = [
    ...beers,
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router