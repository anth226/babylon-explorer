<script lang="ts">
import BtcBlockItem from './BtcBlockItem.vue'

export default {
    name: 'BtcBlockGrid',
    components: {
        BtcBlockItem
    },
    data: () => ({
        hasLogo: false,
        isDisabled: false
    })
}
</script>

<template>
    <div class="mt-5 bg-red-600 wrapper">
        <div class="blocks justify-items-center">
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
            />
            <BtcBlockItem
                :has-logo="hasLogo = true"
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
