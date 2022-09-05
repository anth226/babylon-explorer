<script lang="ts">
// import EpochSection from './EpochSection.vue'

export default {
    name: 'Epochgrid',
    components: {
        // EpochSection
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

<!--    <div class="wrapper">-->
<!--        <div class="flex">-->
<!--            <div class="big-block">-->
<!--                <img class="item" src="../../assets/bbl-logo.svg" />-->
<!--            </div>-->
<!--            <EpochSection />-->
<!--        </div>-->
<!--    </div>-->

    <div class="mt-5 container mx-auto">
        <div class="flex">
            <div class="big-block">
                <img class="item" src="../../assets/bbl-logo.svg" />
            </div>
            <div class="main-section">
                <div class="flex items-center">
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                    <div class="mx-3">
                        ...
                    </div>
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                </div>
                <div class="blank w-full bg-red-400">
                </div>
                <div class="title-section w-full mt-3">
                    <div class="heading">
                        Epoch
                    </div>
                    <div class="subheading">
                        (100 blocks)
                    </div>
                </div>
            </div>

            <div class="main-section">
                <div class="flex items-center">
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                    <div class="mx-3">
                        ...
                    </div>
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                </div>
                <div class="blank w-full bg-red-400">
                </div>
                <div class="title-section w-full mt-3">
                    <div class="heading">
                        Epoch
                    </div>
                    <div class="subheading">
                        (100 blocks)
                    </div>
                </div>
            </div>

            <div class="main-section">
                <div class="flex items-center">
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                    <div class="mx-3">
                        ...
                    </div>
                    <div class="small-block"></div>
                    <div class="small-block"></div>
                </div>
                <div class="blank w-full">
                </div>
                <div class="title-section w-full mt-3">
                    <div class="heading">
                        Epoch
                    </div>
                    <div class="subheading">
                        (100 blocks)
                    </div>
                </div>
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

.main-section {
    align-items: center;
    margin-left: 15px;
    position: relative;
    top: 27px;
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
    margin: 0 10px;
    opacity: 0.4;
}
</style>
