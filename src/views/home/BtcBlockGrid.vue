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
}
</script>

<template>
    <div class="mt-5 wrapper">
        <div class="blocks justify-items-center">
            <BtcBlockItem
                has-logo
                disable-arrow
            />
            <BtcBlockItem
            />
            <BtcBlockItem

            />
            <BtcBlockItem

            />
            <BtcBlockItem

            />
            <BtcBlockItem

            />
            <BtcBlockItem
                is-disabled
            />
            <BtcBlockItem
                is-disabled
            />
            <BtcBlockItem
                is-disabled
            />
            <BtcBlockItem
                is-disabled
            />
            <BtcBlockItem
                is-disabled
            />
        </div>
    </div>
</template>

<style scoped>

    .blocks {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
    }

    @media (max-width: 1538px) {
        .wrapper {
            display: none;
        }
    }

</style>
