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
        }
    }
}
</script>

<template>
    <div class="small-block">
        <div v-if="hasArrow" class="absolute">
            <div class="capsul">
                <img class="capsul-arrow" src="../../assets/capsul-arrow.svg" />
                <img class="capsul-line" src="../../assets/capsul-line.svg" />
                <img v-if="hasLongArrow" src="../../assets/epoch-long-right-arrow.svg" alt="">
                <img class="capsul-circle" src="../../assets/capsul-circle.svg" />
            </div>
        </div>
    </div>
</template>


<style scoped>

.capsul {
    border-radius: 20px;
    display: flex;
    width: 35px;
    background: white;
    position: absolute;
    top: 13px;
    right: -6px;
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

.small-block {
    width: 40px;
    height: 40px;
    background: rgba(1, 12, 194, 0.4);
    border-radius: 10px;
    margin: 0 20px
}

</style>
