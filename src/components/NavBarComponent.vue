<script>
export default {
    name: 'NavbarComponent'
}
</script>

<template>
    <nav class="navbar-expand-lg">
        <div class="flex justify-around items-center">
            <img src="../assets/nav-logo.svg" alt="logo">
            <div class="navbar-nav text-white" style="margin: 0 1em">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/blocks-and-txs">BLOCKS & TXS</RouterLink>
                <RouterLink to="/checkpoints">CHECKPOINTS</RouterLink>
                <RouterLink to="/validators">VALIDATORS</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>

nav {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.active-link {
    border-bottom: 3px solid #23A5DC;
}

a {
    padding: 40px 0;
    margin: 0 17px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 3px;
    text-align: right;
}

</style>


