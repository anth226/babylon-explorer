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
    <div id="app" class="">
        <NavBarComponent />
        <div class="router-container container mt-5">
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

<style>
.router-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

</style>
