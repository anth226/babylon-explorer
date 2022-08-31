import { createRouter, createWebHistory } from "vue-router"
import BlockView from "../views/blocks/BlockView.vue"
import EpochingView from "../views/EpochingView.vue"


// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
        {
            path: "/blocks/:blockID",
            name: "specificBlock",
            component: BlockView,
        },
        {
            path: "/epochs",
            name: "epochs",
            component: EpochingView,
        },
    ],
    linkActiveClass: 'active-link'
})

export default router
