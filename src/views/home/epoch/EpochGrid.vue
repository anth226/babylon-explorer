<script lang="ts">
import EpochBlock from './EpochBlock.vue'
import EpochSection from './EpochSection.vue'
import EpochUpdatedSection from './EpochUpdatedSection.vue'
import SideArrowsComponent from '@/components/SideArrowsComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EpochGrid',
    components: {
        EpochBlock,
        EpochSection,
        EpochUpdatedSection,
        SideArrowsComponent
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
    }
})
</script>

<template>
    <div class="mt-5">
        <div class="flex">
            <SideArrowsComponent />
            <div class="big-block">
                <img class="item" src="../../../assets/bbl-logo.svg" alt="bbl-logo" />
            </div>
            <div class="scrollable-container">
                <EpochUpdatedSection />
                <EpochSection v-for="index in 10" :key="Math.random() * 100" />
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

.scrollable-container {
    display: flex;
    padding: 4px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

</style>
