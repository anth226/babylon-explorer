<script setup>

</script>

<template>
    <nav class="navbar-expand-lg">
        <div class="flex justify-around items-center">
            <img src="../assets/Vector.svg" alt="logo">
            <div class="navbar-nav text-white" style="margin: 0 1em">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/about">BLOCKS & TXS</RouterLink>
                <RouterLink to="/epochs">CHECKPOINTS</RouterLink>
                <RouterLink to="/epochs">VALIDATORS</RouterLink>
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
}

/*.navbar-nav a {*/
/*    display: inline-block;*/
/*    padding: 0.4em 1rem;*/
/*    color: white;*/
/*    text-decoration: none;*/
/*    width: 100px;*/
/*    border-radius: 5px;*/
/*    text-align: center;*/
/*}*/

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


