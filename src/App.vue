<script>
import { RouterLink, RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarComponent.vue";

export default {
    components: {
        RouterLink,
        RouterView,
        NavBarComponent,
    },
    beforeMount() {
        this.$store.dispatch("common/env/init");
    },
};
</script>

<template>
    <div id="app" class="">
        <NavBarComponent />
        <div class="router-container container mt-5">
            <RouterView class="router-view" />
        </div>
    </div>
</template>

<style>
.router-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.router-view {
    width: 100%;
}

</style>
