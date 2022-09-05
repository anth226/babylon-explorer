<script lang="ts">
import EpochItem from './EpochItem.vue'

export default {
    name: 'EpochSection',
    components: {
        EpochItem
    }
}
</script>

<template>
    <div class="main-section bg-yellow-600">
<!--        <div class="small-block items-center">-->
<!--        </div>-->
        <EpochItem />
    </div>
    <div class="main-section bg-yellow-600">
        <!--        <div class="small-block items-center">-->
        <!--        </div>-->
        <EpochItem />
    </div>
    <div class="main-section bg-yellow-600">
        <!--        <div class="small-block items-center">-->
        <!--        </div>-->
        <EpochItem />
    </div>
</template>

<style scoped>

    .main-section {
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
</style>
