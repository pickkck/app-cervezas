
export default [
    {
        path: '/beers',
        name: 'beers',
        component: () => import('@/views/Beers/AllBeers.vue')
    },
    {
        path: '/beers/:id_beer',
        name: 'beers.single_beer',
        component: () => import('@/views/Beers/SingleBeer.vue')
    },
    {
        path: '*',
        redirect: '/beers' 
    },
]