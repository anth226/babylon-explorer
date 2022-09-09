<script lang="ts">

export default {
    name: 'NavbarComponent'
}
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
    padding: 0;
    margin: 0;
    z-index: 100;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.active-link {
    border-bottom: 3px solid #23A5DC;
}

a {
    padding: 40px 0;
    margin: 0 17px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 3px;
    text-align: right;
    color: white;
}

a:hover {
    transition: ease-in-out;
    transition-duration: 200ms;
    color: white;
    opacity: 0.7;
}

@media only screen and (max-width: 1034px) {
    a {
        display: none;
    }
    nav {
        padding: 30px 0;
    }
}

</style>


