<script>
import BlockTableSection from './BlockTableSection.vue'

export default {
    name: 'BlockTable',
    components: {
        BlockTableSection
    },
    data: () => ({
        hasThreeCols: true
    })
}
</script>

<template>
    <div class="block-table flex  mx-auto bg-white">
        <div class="w-1/4">
            <BlockTableSection
                heading="Latest BBN Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Timestamp"
            />
        </div>
        <div class="w-1/4">
            <BlockTableSection
                heading="Latest BTC Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Has ckpts"
            />
        </div>
        <div class="w-1/4">
            <BlockTableSection
                heading="Epoch number"
                count="13"
                col1="Status"
                col2="Epoch"

            />
        </div>
        <div class="w-1/4">
            <BlockTableSection
                heading="Validators"
                count="20"
                col1="Type"
                col2="Number"
            />
        </div>
    </div>
</template>

<style scoped>
    .block-table {
        margin-top: 35px;
        width: 1380px;
        height: 405px;
        box-shadow: 0 4px 94px rgba(0, 0, 0, 0.11);
        border-radius: 20px;
    }
</style>
