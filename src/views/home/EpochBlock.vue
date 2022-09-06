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
                <img class="capsul-circle" src="../../assets/capsul-circle.svg" />
            </div>
        </div>
    </div>
</template>


<style scoped>

.capsul {
    border-radius: 20px;
    display: flex;
    width: 32px;
    background: white;
    position: absolute;
    top: 13px;
    right: -6px;
}

.capsul-line {
    position: relative;
    width: 8px;
    left: 3px;
}

.capsul-long{
    border-radius: 20px;
    display: flex;
    width: 165px;
    background: white;
    position: absolute;
    top: 13px;
    right: -6px;
}

.capsul-long-line {
    position: relative;
    width: 140px;
    left: 3px;
}

.capsul-arrow {
    position: relative;
    left: 5px;
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
