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
}
</script>

<template>
    <div id="app" class="main">
        <div class="container mx-auto">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <RouterView />
            </transition>
        </div>
    </div>
</template>

<style scoped>
.main {
    background-image: url('./assets/nav-overlay.jpg');
}
</style>

