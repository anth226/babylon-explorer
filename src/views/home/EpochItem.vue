<script lang="ts">
import EpochSmallBlock from './EpochSmallBlock.vue'

export default {
    name: 'EpochItem',
    components: {
        EpochSmallBlock
    },
    props: {
        hasArrow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div class="main-section">
        <div class="flex items-center">
            <EpochSmallBlock />
            <div class="small-block"></div>
            <div class="mx-3">
                ...
            </div>
            <div class="small-block"></div>
            <div class="small-block"></div>
        </div>
        <div class="blank w-full bg-red-400"></div>
        <div class="title-section w-full mt-3">
            <div class="heading">
                Epoch
            </div>
            <div class="subheading">
                (100 blocks)
            </div>
        </div>
    </div>
</template>

<style scoped>

.title-section {
    text-align: center;
}

.heading {
    font-weight: 600;
    font-size: 18px;
}

.subheading {
    font-weight: 300;
    font-size: 12px;
}

.blank {
    height: 10px;
    background: var(--primary-blue);
    opacity: 0.1;
    border-radius: 15px;
    position: relative;
    top: 9px;
}


.main-section {
    align-items: center;
    position: relative;
    top: 27px;
    margin: 0 20px;
}

.small-block {
    width: 40px;
    height: 40px;
    background: rgba(1, 12, 194, 0.4);
    border-radius: 10px;
    margin: 0 15px
}

</style>
