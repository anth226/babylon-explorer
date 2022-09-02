<script lang="ts">
export default {
    name: 'BtcBlockItem',
    props: {
        hasLogo: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div class="block-item">
        <div class="block-content items-center absolute">
            <img class="item" src="../../assets/btc-logo.svg" alt="item" />
        </div>
    </div>
</template>

<style scoped>

.block-content {
    text-align: center;;
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

.disabled {
    background: #F7931A;
    opacity: 0.3;
}

</style>
