<script lang="ts">
import BtcBlockItem from './BtcBlockItem.vue'

export default {
    name: 'BtcBlockGrid',
    components: {
        BtcBlockItem
    },
    data: () => ({
        isDisabled: true,
        hasLogo: true,
        disableArrow: true
    }),
    computed: {
        getLatestBlocks() {
            try {
                return this.$store.getters['common/blocks/getBlocks'](10)
            }
            catch {
                return {}
            }
        }
    }
}
</script>

<template>
    <div class="mt-5 wrapper">
        <div class="blocks justify-items-center">
            <BtcBlockItem
                has-logo
                disable-arrow
            />
            <div v-for="block in getLatestBlocks" :key="block.id">
                <BtcBlockItem :height="block.height" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .blocks {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
    }
</style>
