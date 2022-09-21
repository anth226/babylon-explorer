<script lang="ts">
import BtcBlockItem from './BtcBlockItem.vue'
import SideArrowsComponent from '@/components/SideArrowsComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BtcBlockGrid',
    components: {
        BtcBlockItem,
        SideArrowsComponent
    },
    data: () => ({
        isDisabled: true,
        hasLogo: true,
        disableArrow: true,
        blocks: [] as Array<number>
    }),
    computed: {
        getLatestBlocks() {
            try {
                return this.$store.getters['common/blocks/getBlocks'](12)
            }
            catch {
                return {}
            }
        },
        getLatestBlock() {
            return this.blocks.push(this.$store.getters['common/blocks/getBlocks'](1))
        },
        getLatestBlocksTest() {
            return this.$store.getters['common/blocks/getBlocks'](20)
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
                    const timeElapsed = timestamp - startTime
                    const progress = Math.min(timeElapsed / duration, 1)
                    element.scrollLeft = scrollPos + scrollPixels * progress
                    if (timeElapsed < duration) {
                        window.requestAnimationFrame(scroll)
                    } else {
                        return
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
    <div class="flex mt-5">
        <SideArrowsComponent
            @clickedLeft="swipeLeft"
            @clickedRight="swipeRight"
        />
        <div class="mt-1 mr-1">
            <BtcBlockItem
                has-logo
                disable-arrow
            />
        </div>
        <div class="scrollable-container" id="content" ref="content">
            <div>
                <span v-for="block in getLatestBlocksTest" :key="block.height" class="scrollable-container-item"><BtcBlockItem :height="block.height" /></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollable-container {
    display: flex;
    padding: 4px 10px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

.scrollable-container-item {
    margin: 0 12px;;
}
</style>
