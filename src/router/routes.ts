const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
    },
    {
        path: '/blocks',
        name: 'blocks',
        component: () => import(/* webpackChunkName: "BlocksView" */ '../views/blocks/BlocksView.vue')
    },
    {
        path: '/block/:blockID',
        name: 'block',
        component: () => import(/* webpackChunkName: "SingleBlockView" */ '../views/blocks/BlockView.vue')
    },
    {
        path: "/epochs",
        name: "epochs",
        component: () => import(/* webpackChunkName: "EpochingListView" */ '../views/Epoching/EpochingListView.vue')
    },
    {
        path: "/epochs/:epochNum",
        name: "specificEpoch",
        component: () => import(/* webpackChunkName: "SingleEpochDetailView" */ '../views/Epoching/EpochDetailView.vue')
    },
    {
        path: "/metrics",
        name: "metrics",
        component: () => import(/* webpackChunkName: "MetricsListView" */ '../views/Metrics/MetricsListView.vue')
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     component: AboutView,
    // },
]

export default routes
