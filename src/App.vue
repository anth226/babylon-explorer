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
        <RouterView />
    </div>
</template>
