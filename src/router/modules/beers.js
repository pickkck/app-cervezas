
export default [
    {
        path: '/beers',
        name: 'beers',
        component: () => import('@/views/Beers/AllBeers.vue')
    },
    {
        path: '/beers/:id_beer',
        name: 'single_beer',
        component: () => import('@/views/Beers/SingleBeer.vue')
    },
    {
        path: '*',
        redirect: '/beers' 
    },
]