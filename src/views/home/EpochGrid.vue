<script lang="ts">
import EpochItem from './EpochItem.vue'
import EpochBlock from './EpochBlock.vue'
import CurvedArrow from './CurvedArrow.vue'

export default {
    name: 'Epochgrid',
    components: {
        EpochItem,
        EpochBlock,
        CurvedArrow
    },
    data: () => ({
        hasArrow: false,
        hasLongArrow: false,
        hasCurvedArrow: false,
        isDisabled: false,
        longerArrow: false
    })
}
</script>

<template>
    <div class="container mx-auto">
        <div class="flex">
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
                        <EpochBlock
                        />
                        <EpochBlock
                            has-arrow
                            has-curved-arrow
                        />
                        <div class="capsul">
                            <img class="circle" src="../../assets/ellipse.svg" />
                        </div>
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
                            is-disabled
                        />
                        <EpochBlock
                            has-arrow
                            is-disabled
                        />
                        <div class="dots">
                            ...
                        </div>
                        <EpochBlock
                            is-disabled
                        />
                        <EpochBlock
                            has-arrow
                            is-disabled
                        />
                        <div class="capsul">
                            <img class="circle" src="../../assets/ellipse.svg" />
                        </div>
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
                <CurvedArrow
                    curve-coordinates-top=-52
                    curve-coordinates-left=300
                    arrow-coordinates-top=-132
                    arrow-coordinates-left=431
                />
                <CurvedArrow
                    curve-coordinates-top=-52
                    curve-coordinates-left=748
                    arrow-coordinates-top=-132
                    arrow-coordinates-left=921
                    longer-arrow
                />
                <div class="main-section s3">
                    <div class="flex items-center">
                        <EpochBlock
                            has-arrow
                            has-long-arrow
                            is-disabled
                        />
                        <EpochBlock
                            has-arrow
                            is-disabled
                        />
                        <div class="dots">
                            ...
                        </div>
                        <EpochBlock
                            is-disabled
                        />
                        <EpochBlock
                            has-arrow
                            is-disabled
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
    margin-left: 3px;
}

.container {
    margin-top: 62px;
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
    left: 151px;
}

.s3 {
    position: relative;
    left: 286px;
}

.circle {
    border: 2px solid black;
    position: relative;
    top: 0;
    right: 0;
    height: 10px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 10px;
}

.capsul {
    display: flex;
    position: absolute;
    left: 274px;
    top: -7px;
    justify-content: center;
    border-radius: 50px;
    background: white;
    width: fit-content;
    padding: 3px;
    z-index: 2;
}

</style>
