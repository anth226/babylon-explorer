<script lang="ts">
import EpochSection from './EpochSection.vue'

export default {
    name: 'Epochgrid',
    components: {
        EpochSection
    }
}
</script>

<template>
<!--    <div class="bg-red-700 mt-5 flex">-->
<!--        <div class="w-1/3 center bg-indigo-200">-->
<!--            <div class="center">-->
<!--                <div>Epoch 1</div>-->
<!--                <div>(100 blocks)</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="w-1/3 center bg-indigo-400">-->
<!--            <div class="center">-->
<!--                <div >Epoch 2</div>-->
<!--                <div>(100 blocks)</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="w-1/3 center bg-indigo-500">-->
<!--            <div class="small-block"></div>-->
<!--            <div class="center">-->
<!--                <div>Epoch 3</div>-->
<!--                <div>(100 blocks)</div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

    <div class="wrapper">
        <div class="flex">
            <div class="big-block">
                <img class="item" src="../../assets/bbl-logo.svg" />
            </div>
            <EpochSection />
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

.wrapper {
    margin-top: 100px;
}

.big-block  {
    width: 91px;
    height: 91px;
    background: var(--primary-blue);
    border-radius: 20px;
}







.center {
    display: flex;
    justify-content: center;
}

.section {
    background: var(--primary-blue);
    opacity: 0.1;
    border-radius: 15px;
}

.small-block {
    width: 40px;
    height: 40px;
    background: var(--primary-blue);
    border-radius: 10px;
}
</style>
