<script lang="ts">

export default {
    name: 'NavbarComponent'
}
</script>

<template>
    <nav class="navbar-expand-lg px-5 bg-blue-900">
        <div class="flex justify-around items-center">
            <img src="../assets/nav-logo.svg" alt="logo">
            <div class="navbar-nav" style="margin: 0 1em">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/blocks-and-txs">BLOCKS & TXS</RouterLink>
                <RouterLink to="/checkpoints">CHECKPOINTS</RouterLink>
                <img class="ellipse" src="../assets/ellipse.svg" />

                <RouterLink to="/validators">VALIDATORS</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>

nav {
    padding: 0;
    margin: 0
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

.ellipse {
    background-color:#fff;
    border:2px solid black;
    height:10px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:10px;
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

</style>x`z`


