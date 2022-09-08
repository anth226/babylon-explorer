<script lang="ts">
import BlockTableSection from './BlockTableSection.vue'

export default {
    name: 'BlockTable',
    components: {
        BlockTableSection
    },
    data: () => ({
        hasThreeCols: true
    }),
    computed: {
        chainHeight() {
            return this.$store.getters['common/blocks/getHeight']
        },
        getCurrentEpoch() {
            return this.$store.getters['epoching/stats/getCurrentEpoch']
        },
        numValidators() {
            return this.$store.getters['addresses/validatorStats/numValidators']
        }
    }
}
</script>

<template>
    <div class="container mx-auto mb-5">
        <div class="main-grid bg-white">
            <div>
                <BlockTableSection
                    :has-three-cols="true"
                    col1="#"
                    col2="Hash"
                    col3="Timestamp"
                >
                    <template #heading>LATEST BBN BLOCK</template>
                    <template #count>{{ chainHeight }}</template>
                </BlockTableSection>
            </div>
            <div>
                <BlockTableSection
                    :has-three-cols="true"
                    col1="#"
                    col2="Hash"
                    col3="Has ckpts"
                >
                <template #heading>LATEST BBN BLOCK</template>
                    <template #count>{{ chainHeight }}</template>
                </BlockTableSection>
            </div>
            <div>
                <BlockTableSection
                    col1="Status"
                    col2="Epoch"
                >
                <template #heading>EPOCH NUMBER</template>
                <template #count>{{ getCurrentEpoch }}</template>
                </BlockTableSection>
            </div>
            <div>
                <BlockTableSection
                    col1="Type"
                    col2="Number"
                >
                <template #heading>VALIDATORS</template>
                <template #count>{{ numValidators }}</template>
                </BlockTableSection>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-grid {
        margin-top: 80px;
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

    @media(max-width: 770px) {
        .main-grid {
            display: block;
        }
    }
</style>
