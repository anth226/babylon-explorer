<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
        longerArrow: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<template>
    <div class="absolute">
        <img
            v-if="longerArrow"
            src="../../../assets/curved-long-arrow.svg"
            :style="{ left: curveCoordinatesLeft + 'px', top: curveCoordinatesTop + 'px' }"
            class="relative"
            alt="curved-long-arrow"
        />
        <img
            v-else
            src="../../../assets/curved-arrow.svg"
            :style="{ left: curveCoordinatesLeft + 'px', top: curveCoordinatesTop + 'px' }"
            class="relative"
            alt="curved-arrow"
        />
        <img
            src="../../../assets/arrow-up.svg"
            :style="{ left: arrowCoordinatesLeft + 'px', top: arrowCoordinatesTop + 'px' }"
            class="relative"
            alt="arrow-up"
        />
    </div>
</template>
