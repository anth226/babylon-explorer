<script lang="ts">
import EpochBlock from './EpochBlock.vue'
import EpochSection from './EpochSection.vue'
import EpochUpdatedSection from './EpochUpdatedSection.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EpochGrid',
    components: {
        EpochBlock,
        EpochSection,
        EpochUpdatedSection
    },
    data: () => ({
        hasArrow: false,
        hasLongArrow: false,
        isDisabled: false,
        longerArrow: false,
        epochs: [],
    }),
    computed: {
        getCurrentEpoch() {
            try {
                return this.epochs.push(this.$store.getters['epoching/stats/getCurrentEpoch'])
            } catch {
                return 0
            }
        }
    },
    watch: {
        epochs: {
            deep: true,
            handler() {
                // alert('slide next epoch from right')
            }
        }
    },
    methods: {
        goRight() {

        },
        goLeft() {

        }
    }
})
</script>

<template>
    <div class="mt-5">
        <!--        Test:-->
        <!--        <div class="mt-2">-->
        <!--            No of epochs: {{ epochs.length }}-->
        <!--        </div>-->
        <!--        <div class="mt-2">-->
        <!--            {{ epochs }}-->
        <!--        </div>-->
        <div class="flex">
            <div @click="goLeft" class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-square-fill arrow-left" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                </svg>
            </div>
            <div class="big-block">
                <img class="item" src="../../../assets/bbl-logo.svg" alt="bbl-logo" />
            </div>
            <div class="scrollable-container">
                <EpochUpdatedSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
                <EpochSection />
            </div>
            <div @click="goRight" class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-square-fill arrow-right" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                </svg>
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
    width: 97px;
    height: 91px;
    background: var(--primary-blue);
    border-radius: 20px;
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
    margin: 0 20px;
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
    left: 1750px;
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

.scrollable-container {
    display: flex;
    margin: 4px;
    padding: 4px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

</style>
