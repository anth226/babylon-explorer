<script>
    export default {
        name: 'BlockItem',
        props: {
            name: {
                type: String,
                required: false,
            },
            value: {
                type: Number,
                required: false
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            hasArrowUp: {
                type: Boolean,
                default: false
            },
            hasArrowLeft: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<template>
    <div>
        <div
            class="box"
            :class="isDisabled ? 'opacity-20' : ''"
        >
            <div class="type">
                {{ name }}
            </div>
            <div class="value">
                {{ value }}
            </div>
        </div>
        <img
            src="../../assets/arrow-up.svg"
            v-if="hasArrowUp"
            class="arrow-up"
            :class="isDisabled ? 'opacity-20' : ''"
            alt="arrow"
        >
        <img
            src="../../assets/arrow-left.svg"
            v-if="hasArrowLeft"
            class="arrow-left"
            :class="isDisabled ? 'opacity-20' : ''"
            :style="hasArrowUp ? 'top: -51%;' : 'top: -45%'"
            alt="arrow"
        >
    </div>
</template>

<style scoped>

.box {
    width: 102px;
    height: 90px;
    background: #FFA436;
    border-radius: 10px;
    color: #f3f3f3;
}

.box:hover {
    scale: 1.05;
    transition: ease-in-out;
    transition-duration: 300ms;
    cursor: pointer;
}

.arrow-left {
    position: relative;
    width: 17px;
    height: 15px;
    right: 30px;
}

.arrow-up {
    position: relative;
    top: 12px;
    left: 30%;
}

.type {
    position: relative;
    top: 18%;
    left: 20%;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
}

.value {
    position: relative;
    top: 13%;
    left: 18%;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 28px;
    display: flex;
    align-items: center;
}
</style>
