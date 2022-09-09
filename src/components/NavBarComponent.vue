<script>
import SearchBarComponent from "./SearchBarComponent.vue";

export default {
    components: {
        SearchBarComponent,
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="navbar-content">
            <RouterLink class="navbar-brand" to="/">Babylon</RouterLink>
            <SearchBarComponent />
            <div class="navbar-nav" style="margin: 0em 1em">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/blocks">Blocks</RouterLink>
                <RouterLink to="/epochs">Epoching</RouterLink>
                <RouterLink to="/metrics">Metrics</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    background-color: black !important;
    margin-bottom: 3rem;
}

.navbar-brand {
    color: white;
    font-size: 2rem;
    font-weight: 900;
}

.navbar-content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1280px;
    background-color: black;
}

.navbar-nav a {
    display: inline-block;
    padding: 0.4em 1rem;
    color: white;
    text-decoration: none;
    width: 100px;
    border-radius: 5px;
    text-align: center;
}

.navbar-nav a.router-link-exact-active {
    font-weight: 600;
}

.navbar-nav a:hover {
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
}

.navbar-nav a:first-of-type {
    border: 0;
}
</style>
