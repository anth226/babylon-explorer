<script>
import BlockItem from './BlockItem.vue'

export default {
    name: 'BlockGrid',
    components: {
        BlockItem
    },
    data: () => ({
        isDisabled: false,
        hasArrowUp: false,
        hasArrowLeft: false
    })
}
</script>

<template>
    <div id="block-items" class="justify-center">
        <div class="blocks">
            <BlockItem />
            <BlockItem name="BTC" value="1201" :has-arrow-up="true" :has-arrow-left="true" />
            <BlockItem name="BTC" value="1202" :has-arrow-left="true" />
            <BlockItem name="BTC" value="1200" :has-arrow-left="true" />
            <BlockItem :isDisabled="true" :has-arrow-left="true" />
            <BlockItem :isDisabled="true" :has-arrow-left="true" :has-arrow-up="true" />
            <BlockItem :isDisabled="true" :has-arrow-left="true" />
            <BlockItem :isDisabled="true" :has-arrow-left="true" :has-arrow-up="true" />
            <BlockItem :isDisabled="true" :has-arrow-left="true" />
            <BlockItem :isDisabled="true" :has-arrow-up="true" />
        </div>
    </div>
</template>

<style scoped>
    .blocks {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
