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
    }
})
</script>

<template>
    <div class="flex mt-5">
        <SideArrowsComponent />
        <div class="mt-1 mr-1">
            <BtcBlockItem
                has-logo
                disable-arrow
            />
        </div>
        <div class="scrollable-container">
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
