<script lang="ts">
import EpochBlock from './EpochBlock.vue'
import CurvedArrow from './CurvedArrow.vue'

export default {
    name: 'Epochgrid',
    components: {
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
    <div class="mt-5 pt-3 flex">



        <div class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-square-fill arrow-left" viewBox="0 0 16 16">
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
            </svg>
        </div>



        <div class="flex">
            <!-- left part -->
            <div class="w-1/12 flex justify-end ml-5">
                <div class="big-block">
                    <img class="item" src="../../../assets/bbl-logo.svg" alt="bbl-logo" />
                </div>
            </div>
            <!-- right main part -->
            <div class=" w-11/12">
                <div class="flex epoch-section">
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
                                <img class="circle" src="../../../assets/ellipse.svg" alt="circle" />
                            </div>
                        </div>
                        <div class="blank w-full bg-red-400"></div>
                        <div class="title-section w-full mt-3">
                            <div class="heading">
                                Epoch 1
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
                                <img class="circle" src="../../../assets/ellipse.svg" alt="ellipse" />
                            </div>
                        </div>
                        <div class="blank w-full bg-red-400"></div>
                        <div class="title-section w-full mt-3">
                            <div class="heading">
                                Epoch 2
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
                                Epoch 3
                            </div>
                            <div class="subheading">
                                (100 blocks)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-square-fill arrow-right" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
            </svg>
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

.arrow-left {
    display: flex;
    position: absolute;
    top: 30px;
    left: -46px;
    color: #b2b2b2;
    border-radius: 15px;
    width: 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.arrow-left:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transition-duration: 300ms;
    color: var(--primary-blue);
}

.arrow-right {
    display: flex;
    position: relative;
    top: 30px;
    left: 1364px;
    color: #b2b2b2;
    border-radius: 15px;
    width: 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.arrow-right:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transition-duration: 300ms;
    color: var(--primary-blue);
}

.epoch-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
}

</style>
