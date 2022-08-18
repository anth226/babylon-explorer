import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlocksView from "../views/blocks/BlocksView.vue";
import BlockView from "../views/blocks/BlockView.vue";
import EpochingView from "../views/EpochingView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
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
            component: EpochingView,
        },
    ],
});

export default router;
