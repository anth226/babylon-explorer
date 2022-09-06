<script lang="ts">

export default {
    name: 'EpochSmallBlock',
    props: {
        hasArrow: {
            type: Boolean,
            default: false
        },
        hasLongArrow: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div :class="isDisabled ? 'disabled' : ''" class="small-block">
        <div v-if="hasArrow" class="absolute">
            <div :class="hasLongArrow ? 'capsul-long' : 'capsul'">
                <img class="capsul-arrow" src="../../assets/capsul-arrow.svg" />
                <img v-if="!hasLongArrow" :class="hasLongArrow ? 'capsul-long-line' : 'capsul-line'" src="../../assets/capsul-line.svg" alt="">
                <img v-else-if="hasLongArrow" class="capsul-long-line" src="../../assets/epoch-long-right-arrow.svg" />
                <img class="capsul-circle" src="../../assets/ellipse.svg" />
            </div>
        </div>
    </div>
</template>


<style scoped>

.capsul {
    border-radius: 50px;
    display: flex;
    width: 36px;
    background: white;
    position: absolute;
    top: 13px;
    right: -8px;
}

.capsul-line {
    position: relative;
    width: 8px;
    left: 5px;
}

.capsul-long{
    border-radius: 50px;
    display: flex;
    width: 168px;
    background: white;
    position: absolute;
    top: 13px;
    right: -8px;
}

.capsul-circle {
    border: 2px solid black;
    position: relative;
    top: 2px;
    right: -5px;
    height: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10px;
}

.capsul-long-line {
    position: relative;
    width: 140px;
    left: 6px;
}

.capsul-arrow {
    position: relative;
    left: 8px;
}

.small-block {
    width: 40px;
    height: 40px;
    background: rgba(1, 12, 194);
    border-radius: 10px;
    margin: 0 14px
}

.disabled {
    background: rgba(1, 12, 194, 0.4);
}
</style>
