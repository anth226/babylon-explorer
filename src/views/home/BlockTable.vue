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
    <!-- <div class="block-table mx-auto bg-white">
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
    </div> -->


<div>
    <div class="main-grid bg-white">
        <div>
            <BlockTableSection
                heading="Latest BBN Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Timestamp"
            />
        </div>
        <div>
            <BlockTableSection
                heading="Latest BBN Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Timestamp"
            />
        </div>
        <div>
            <BlockTableSection
                heading="Latest BBN Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Timestamp"
            />
        </div>
        <div>
            <BlockTableSection
                heading="Latest BBN Block"
                count="123"
                :has-three-cols="true"
                col1="#"
                col2="Hash"
                col3="Timestamp"
            />
        </div>
    </div>
</div>


</template>

<style scoped>
    .main-grid {
        margin: 35px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        box-shadow: 0 4px 94px rgba(0, 0, 0, 0.11);
        border-radius: 20px;
    }

    @media(max-width: 1280px) {
        .main-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 642px) {
        .main-grid {
            display: block;
        }
    }
</style>
