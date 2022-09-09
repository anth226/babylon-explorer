import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlocksView from "../views/blocks/BlocksView.vue";
import BlockView from "../views/blocks/BlockView.vue";
import EpochingListView from "../views/Epoching/EpochingListView.vue";
import EpochDetailViewVue from "@/views/Epoching/EpochDetailView.vue";
import MetricsListViewVue from "@/views/Metrics/MetricsListView.vue";

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
    ],
});

export default router;
