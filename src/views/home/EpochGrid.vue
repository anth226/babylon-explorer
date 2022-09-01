<script>
import EpochItem from './EpochItem.vue'

export default {
    name: 'EpochGrid',
    components: {
        EpochItem
    },
    data: () => ({
        hasArrow: true,
        arrowLength: [
            'short',
            'medium',
            'long'
        ],
    })
}

</script>

<template>
    <div class="flex mt-4 epoch-grid">
        <div class="flex mx-auto">
            <EpochItem
                epoch-num="10"
                blocks-num="10"
                :arrow-length=arrowLength[2]
                position="25"
            />
            <EpochItem
                epoch-num="11"
                blocks-num="10"
                :arrow-length=arrowLength[0]
                position="-35"
            />
            <EpochItem
                epochNum="12"
                blocksNum="10"
                :arrow-length=arrowLength[1]
                position="-75"
            />
            <EpochItem
                epoch-num="13"
                blocks-num="10"
                :has-arrow="false"
                position="-105" flex justify-end
            />
        </div>
    </div>
</template>

<style scoped>


@media screen
and (min-device-width: 100px)
and (max-device-width: 1500px)
and (-webkit-min-device-pixel-ratio: 1) {
    .epoch-grid {
        scale: 0.8;
    }
}
</style>
