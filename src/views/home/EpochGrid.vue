<script lang="ts">
import EpochItem from './EpochItem.vue'
import EpochBlock from './EpochBlock.vue'

export default {
    name: 'Epochgrid',
    components: {
        EpochItem,
        EpochBlock
    },
    data: () => ({
        hasArrow: false,
        hasLongArrow: false
    })
}
</script>

<template>
    <div class="mt-5 container mx-auto">
        <div class="flex container mx-auto">
            <div class="big-block">
                <img class="item" src="../../assets/bbl-logo.svg" />
            </div>





            <div class="flex">
                <div class="main-section s1">
                    <div class="flex items-center">
                        <EpochBlock
                            has-arrow
                        />
                        <EpochBlock
                            has-arrow
                        />
                        <div class="dots">
                            ...
                        </div>
                        <EpochBlock />
                        <EpochBlock
                            has-arrow
                        />
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


                <div class="main-section s2">
                    <div class="flex items-center">
                        <EpochBlock
                            has-arrow
                            has-long-arrow
                        />
                        <EpochBlock

                        />
                        <div class="dots">
                            ...
                        </div>
                        <EpochBlock />
                        <EpochBlock

                        />
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


                <div class="main-section s3">
                    <div class="flex items-center">
                        <EpochBlock

                        />
                        <EpochBlock

                        />
                        <div class="dots">
                            ...
                        </div>
                        <EpochBlock />
                        <EpochBlock

                        />
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
            </div>














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

.dots {
    margin: 0 17px;
}

.main-section {
    align-items: center;
    position: relative;
    top: 27px;
}

.s1 {
    position: relative;
    left: 18px;
}

.s2 {
    position: relative;
    left: 137px;
}

.s3 {
    position: relative;
    left: 297px;
}


</style>
