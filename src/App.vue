<script>
import { RouterLink, RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarExtendedComponent.vue";

export default {
    components: {
        RouterLink,
        RouterView,
        NavBarComponent,
    },
    beforeMount() {
        this.$store.dispatch("common/env/init")
    },
}
</script>

<template>
    <div id="app">
        <NavBarComponent extended />
        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <RouterView extended />
        </transition>
    </div>
</template>
