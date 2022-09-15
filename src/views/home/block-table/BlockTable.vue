<script>
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
        numValidators() {
            return this.$store.getters['addresses/validatorStats/numValidators']
        },
        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8)
            } catch {
                return []
            }
        }
    },
    methods: {
        convertDate(date) {
            const currentDate = new Date()
            date = new Date()

            if (date.toLocaleString() === currentDate.toLocaleString()) {
                return 'Today ' + date.toLocaleString().substring(10)
            }
        },
    }
}
</script>

<template>
    <div class="container mx-auto mb-5">
        <div class="main-grid bg-white">

            <!-- 1 -->

            <div>
                <BlockTableSection
                    heading="latest bbn block"
                    has-three-cols
                    col1="#"
                    col2="Hash"
                    col3="Timestamp"
                >
                    <template #count>{{ chainHeight }}</template>
                    <template #body>
                        <div v-for="block in latestBlocks" class="item flex justify-between">
                            <div>
                                <RouterLink :to="{ path: '/block/' + block.height }">{{ block.height }}</RouterLink>
                            </div>
                            <div class="compress section-compress-width-1">
                                {{ block.hash }}
                            </div>
                            <div class="font-bold">
                                {{ convertDate(block.timestamp) }}
                            </div>
                        </div>
                    </template>
                </BlockTableSection>
            </div>

            <!-- 2 -->

            <div>
                <BlockTableSection
                    heading="latest btc block"
                    has-three-cols
                    col1="#"
                    col2="Hash"
                    col3="Has ckpts"
                >
                    <template #count>{{ chainHeight }}</template>
                    <template #body>
                        <div v-for="block in latestBlocks" class="item flex justify-between">
                            <div>
                                <RouterLink :to="{ path: '/block/' + block.height }">{{ block.height }}</RouterLink>
                            </div>
                            <div class="compress section-compress-width-2">
                                {{ block.hash }}
                            </div>
                            <div class="font-bold">
                                yes
                            </div>
                        </div>
                    </template>
                </BlockTableSection>
            </div>

            <!-- 3 -->

            <div>
                <BlockTableSection
                    heading="epoch number"
                    col1="Status"
                    col2="Epoch"
                >
                    <template #count>{{ chainHeight }}</template>
                    <template #body>
                        <div v-for="block in latestBlocks" class="item flex justify-between">
                            <div>
                                Accumulating
                            </div>
                            <div class="font-bold">
                                yes
                            </div>
                        </div>
                    </template>
                </BlockTableSection>
            </div>

            <!-- 4 -->

            <div>
                <BlockTableSection
                    heading="validators"
                    col1="Type"
                    col2="Number"
                >
                    <template #count>{{ chainHeight }}</template>
                    <template #body>
                        <div v-for="block in latestBlocks" class="item flex justify-between">
                            <div>
                                Active
                            </div>
                            <div class="font-bold">
                                10
                            </div>
                        </div>
                    </template>
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

    .item {
        border-top: 1px solid rgba(51, 51, 51, 0.05);
        padding: 8px 0;
        font-weight: 400;
        font-size: 13px;
        line-height: 32px;
        color: var(--text-dark);
    }

    .compress {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 12px;
    }

    .section-compress-width-1 {
        width: 90px;
    }

    .section-compress-width-2 {
        width: 170px;
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
