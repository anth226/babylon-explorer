<script lang="ts">
export default {
    name: 'BtcBlockItem',
    props: {
        hasLogo: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        disable: {
            type: Boolean
        }
    },
}
</script>

<template>
    <div :class="isDisabled ? 'disabled' : ''" class="block-item">
            <div v-if="hasLogo" class="block-content items-center absolute">
            <img class="item" src="../../assets/btc-logo.svg" alt="item" />
        </div>

        <div class="absolute">
            <div class="capsul">
                <img class="capsul-arrow" src="../../assets/capsul-arrow.svg" />
                <img class="capsul-line" src="../../assets/capsul-line.svg" />
                <img class="capsul-circle" src="../../assets/capsul-circle.svg" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.block-content {
    text-align: center;;
}

.capsul {
    border-radius: 20px;
    display: flex;
    width: 35px;
    background: white;
    position: absolute;
    top: 36px;
    right: -6px;
}

.capsul-line {
    width: 9px;
}


.item {
    position: relative;
    top: 20px;
    left: 22px;
    width: 39px;
    height: 51px;
}

.block-item  {
    width: 90px;
    height: 91px;
    background: #F7931A;
    border-radius: 20px;
    cursor: pointer;
}

.block-item:hover {
    scale: 1.03;
    transition-duration: 200ms;
}

.disabled {
    background: rgba(247, 147, 26, 0.3);
}

</style>
