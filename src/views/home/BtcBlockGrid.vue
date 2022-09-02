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
            <div class="block-item">
                <BtcBlockItem
                    :has-logo="hasLogo = true"
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
                    :is-disabled="isDisabled = true"
                />
                <BtcBlockItem
                    :is-disabled="isDisabled = true"
                />
                <BtcBlockItem
                    :is-disabled="isDisabled = true"
                />
                <BtcBlockItem
                    :is-disabled="isDisabled = true"
                />
                <BtcBlockItem
                    :is-disabled="isDisabled = true"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

    .blocks {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
    }

    .block-item {
        width: 90px;
        height: 91px;
        background: #F7931A;
        border-radius: 20px;
    }

    @media (max-width: 1538px) {
        .wrapper {
            display: none;
        }
    }

</style>
