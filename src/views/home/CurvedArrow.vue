<script lang="ts">

export default {
    name: 'CurvedArrow',
    props: {
        curveCoordinatesTop: {
            type: Number,
            default: 0
        },
        curveCoordinatesLeft: {
            type: Number,
            default: 0
        },
        arrowCoordinatesTop: {
            type: Number,
            default: 0
        },
        arrowCoordinatesLeft: {
            type: Number,
            default: 0
        },
    }
}
</script>

<template>
    <div class="absolute">
        <img :style="{ left: curveCoordinatesLeft + 'px', top: curveCoordinatesTop + 'px' }" class="curved-arrow-section" src="../../assets/curved-arrow.svg" />
        <img :style="{ left: arrowCoordinatesLeft + 'px', top: arrowCoordinatesTop + 'px' }" class="arrow-up" src="../../assets/arrow-up.svg" />
    </div>
</template>

<style scoped>

.arrow-up {
    position: relative;
    /*left: 522px;*/
    /*top: -132px;*/
    width: fit-content;
}

.curved-arrow-section {
    position: relative;
    /*left: v-bind('curveCoordinatesLeft');*/
    /*top: v-bind('curveCoordinatesTop');*/
}
</style>
