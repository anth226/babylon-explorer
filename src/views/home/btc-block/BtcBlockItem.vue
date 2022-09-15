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
            default: false
        },
        height: String
    },
    data: () => ({
        hovered: false,
    }),
    methods: {
        hoverEnterBlock() {
            if (!this.hasLogo) {
                this.hovered = true
            }
        }
    }
}
</script>

<template>
    <div
        @mouseenter="hoverEnterBlock"
        @mouseleave="hovered = false"
        :class="isDisabled ? 'disabled' : ''"
        class="block-item"
    >
        <div class="block-content items-center absolute">
            <img v-if="hasLogo" class="item" src="../../../assets/btc-logo.svg" alt="item" />
            <div v-if="hovered" class="block-height-inner-text">
                <div class="block-height-inner-subtext">
                    Height:
                </div>
                <div>
                    {{ height }}
                </div>
            </div>
        </div>

        <div v-if="!disableArrow" class="absolute">
            <div class="capsul">
                <img class="capsul-arrow" src="../../../assets/capsul-arrow.svg" alt="capsul-arrow" />
                <img class="capsul-line" src="../../../assets/capsul-line.svg" alt="capsul-line" />
                <img class="capsul-circle" src="../../../assets/ellipse.svg" alt="capsul-circle" />
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

.block-height-inner-text {
    text-align: center;
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 18px;
    font-weight: 600;
}

.block-height-inner-subtext {
    font-weight: 100;
    font-size: 12px;
    margin-bottom: 2px;
}

.disabled {
    opacity: 0.3;
}

</style>
