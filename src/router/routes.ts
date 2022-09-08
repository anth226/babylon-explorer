const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
    },
    {
        path: '/block/:blockID',
        name: 'block',
        component: () => import(/* webpackChunkName: "BlocksView" */ '../views/blocks/BlockView.vue')
    }
]

export default routes
