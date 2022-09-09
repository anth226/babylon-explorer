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
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/blocks",
        name: "blocks",
        component: BlocksView,
    },
    {
        path: "/blocks/:blockID",
        name: "specificBlock",
        component: BlockView,
    },
    {
        path: "/epochs",
        name: "epochs",
        component: EpochingListView,
    },
    {
        path: "/epochs/:epochNum",
        name: "specificEpoch",
        component: EpochDetailViewVue,
    },
    {
        path: "/metrics",
        name: "metrics",
        component: MetricsListViewVue,
    },
]

export default routes
