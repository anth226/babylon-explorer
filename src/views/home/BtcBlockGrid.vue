<script lang="ts">

</script>

<template>
    <div class="mt-5 bg-red-600 wrapper">
        <div class="blocks justify-items-center">
            <div v-for="index in 11" :key="index" class="block-item">
                <div class="block-content items-center absolute">
                    <img class="item" src="../../assets/btc-logo.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .blocks {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
    }

    .item {
        position: relative;
        top: 20px;
        left: 22px;
        width: 39px;
        height: 51px;
    }

    .block-item {
        width: 90px;
        height: 91px;
        background: #F7931A;
        border-radius: 20px;
    }

    .block-content {
        text-align: center;;
    }


    @media (max-width: 1538px) {
        .wrapper {
            display: none;
        }
    }

</style>
