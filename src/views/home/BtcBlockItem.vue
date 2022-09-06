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
        },
        disableArrow: {
            type: Boolean,
            default: true
        }
    },
}
</script>

<template>
    <div :class="isDisabled ? 'disabled' : ''" class="block-item">
            <div v-if="hasLogo" class="block-content items-center absolute">
            <img class="item" src="../../assets/btc-logo.svg" alt="item" />
        </div>

        <div v-if="!disableArrow" class="absolute">
            <div class="capsul">
                <img class="capsul-arrow" src="../../assets/capsul-arrow.svg" />
                <img class="capsul-line" src="../../assets/capsul-line.svg" />
                <img class="capsul-circle" src="../../assets/ellipse.svg" />
            </div>
        </div>
    </div>
</template>

<style scoped>


.capsul {
    border-radius: 50px;
    display: flex;
    width: 43px;
    background: white;
    position: absolute;
    top: 36px;
    right: -11px;
    height: 18px;
}

.capsul-line {
    position: relative;
    width: 12px;
    left: 3px;
}

.capsul-arrow {
    position: relative;
    left: 5px;
}

.capsul-circle {
    border: 2px solid black;
    position: relative;
    top: 2.9px;
    right: -3px;
    height: 12px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 12px;
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

.disabled {
    opacity: 0.3;
}

</style>
