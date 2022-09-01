const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
    },
    {
        path: "/blocks-and-txs",
        name: "blocks-and-txs",
        component: () => import(/* webpackChunkName: "AboutView */ '../views/blocks-and-txs/BlocksAndTXS.vue')
    },
    {
        path: "/checkpoints",
        name: "checkpoints",
        component: () => import(/* webpackChunkName: "CheckpointsView */ '../views/checkpoints/CheckpointsView.vue')
    },
    {
        path: '/validators',
        name: 'Validators',
        component: () => import(/* webpackChunkName: "ValidatorsView" */ '../views/validators/ValidatorsView.vue')
    },
]

export default routes