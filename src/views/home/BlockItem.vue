<script>
    export default {
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
        <div :class="isDisabled ? 'opacity-20' : ''" class="box">
            <div class="type">
                {{ name }}
            </div>
            <div class="value">
                {{ value }}
            </div>
        </div>
        <img v-if="hasArrowUp" :class="isDisabled ? 'opacity-20' : ''" class="arrow-up" src="../../assets/arrow-up.svg" alt="arrow">
        <img v-if="hasArrowLeft" :class="isDisabled ? 'opacity-20' : ''" :style="hasArrowUp ? 'top: -51%;' : 'top: -45%'" class="arrow-left" src="../../assets/arrow-left.svg" alt="arrow">
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

.fix {
    border: 3px solid black;
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
