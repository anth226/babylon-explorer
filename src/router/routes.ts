const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
    }
]

export default routes
