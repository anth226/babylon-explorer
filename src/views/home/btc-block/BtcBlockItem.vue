<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
        height: {
            type: String
        }
    }
})
</script>

<template>
    <div
        :class="isDisabled ? 'disabled' : ''"
        class="block-item"
    >
        <img v-if="hasLogo" class="item" src="../../../assets/btc-logo.svg" alt="item" />
        <div v-else class="block-height-inner-text">
            <div>
                {{ height }}
                <div class="capsul">
                    <img class="capsul-arrow" src="../../../assets/capsul-arrow.svg" alt="capsul-arrow" />
                    <img class="capsul-line" src="../../../assets/capsul-line.svg" alt="capsul-line" />
                    <img class="capsul-circle" src="../../../assets/ellipse.svg" alt="capsul-circle" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.capsul {
    width: 28px;
    height: 16px;
    background: white;
    position: relative;
    right: 20px;
    bottom: 8px;
    border-radius: 50px;
}

.capsul-line {
    position: relative;
    width: 8px;
    left: 7px;
    bottom: 6px;
}

.capsul-arrow {
    position: relative;
    width: 8px;
    top: 1px;
    left: 1px;
}

.capsul-circle {
    border: 2px solid black;
    position: relative;
    top: -11px;
    right: -15px;
    height: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10px;
}

.item {
    position: relative;
    left: 12px;
    width: 32px;
    height: 51px;
}

.block-item  {
    width: 65px;
    height: 65px;
    background: #F7931A;
    border-radius: 10px;
    cursor: pointer;
    word-wrap: break-word;
    display: table-cell;
    vertical-align: middle;
}

.block-height-inner-text {
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 600;
}

.disabled {
    opacity: 0.3;
}

@media (max-width: 1700px) {
    .block-item  {
        width: 50px;
        height: 50px;
        background: #F7931A;
        border-radius: 10px;
        cursor: pointer;
    }
    .capsul {
        bottom: 7px;
        scale: 0.9;
    }
    .block-height-inner-text {
        top: 17px;
        left: 11px;
        font-size: 11px;
        font-weight: 500;
    }
}

</style>
