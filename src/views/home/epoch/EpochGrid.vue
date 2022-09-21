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
        epochs: [] as Array<number>,
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
        getCurrentEpoch: {
            deep: true,
            handler() {
                // alert('slide next epoch from right')
            }
        }
    },
    methods: {
        scrollTo(element, scrollPixels, duration) {
            const scrollPos = element.scrollLeft
            if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)))
            {
                const startTime =
                    "now" in window.performance
                        ? performance.now()
                        : new Date().getTime()

                function scroll(timestamp) {
                    const timeElapsed = timestamp - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    element.scrollLeft = scrollPos + scrollPixels * progress;
                    if (timeElapsed < duration) {
                        //Request for animation
                        window.requestAnimationFrame(scroll);
                    } else {
                        return;
                    }
                }
                window.requestAnimationFrame(scroll)
            }
        },
        swipeLeft() {
            const content = this.$refs.content
            this.scrollTo(content, -300, 800)
        },
        swipeRight() {
            const content = this.$refs.content
            this.scrollTo(content, 300, 800)
        }
    }
})
</script>

<template>
    <div class="mt-5">
        <div class="flex">
            <SideArrowsComponent
                @clickedLeft="swipeLeft"
                @clickedRight="swipeRight"
            />
            <div class="big-block">
                <img class="item" src="../../../assets/bbl-logo.svg" alt="bbl-logo" />
            </div>
            <div class="scrollable-container" id="content" ref="content">
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
