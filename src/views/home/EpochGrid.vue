<script lang="ts">
import EpochItem from './EpochItem.vue'

export default {
    name: 'Epochgrid',
    components: {
        EpochItem
    }
}
</script>

<template>
    <div class="mt-5 container mx-auto">
        <div class="flex container mx-auto">
            <div class="big-block">
                <img class="item" src="../../assets/bbl-logo.svg" />
            </div>
            <EpochItem />
            <EpochItem />
            <EpochItem />
        </div>
    </div>
</template>


<style scoped>

.item {
    position: relative;
    top: 17px;
    left: 19px;
    width: 54px;
    height: 56px;
}

.big-block  {
    width: 91px;
    height: 91px;
    background: var(--primary-blue);
    border-radius: 20px;
}

.epoch-wrapper {
    display: flex;
    left: 100px;
}

</style>
