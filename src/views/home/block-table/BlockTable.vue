<script lang="ts">
import BlockTableSection from "./BlockTableSection.vue";
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BlockTable",
    components: {
        BlockTableSection,
    },
    data: () => ({
        hasThreeCols: true,
    }),
    computed: {
        chainHeight() {
            return this.$store.getters["common/blocks/getHeight"];
        },
        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8);
            } catch {
                return [];
            }
        },

        btcChainHeight() {
            return this.$store.getters[
                "btclightclient/btcBlockList/getBtcHeight"
            ];
        },
        latestBtcBlocks() {
            try {
                return this.$store.getters[
                    "btclightclient/btcBlockList/getBtcMainChain"
                ](8);
            } catch {
                return [];
            }
        },

        latestEpoch() {
            return parseInt(
                this.$store.getters["epoching/stats/getCurrentEpoch"]
            );
        },

        validatorStatistic() {
            return this.$store.getters[
                "validators/validatorStats/getAllValidatorStatistic"
            ];
        },

        epochStatusCount() {
            return this.$store.getters[
                "checkpointing/checkpointStats/getEpochStatusCount"
            ];
        },
        allUnbondingStats() {
            return this.$store.getters[
                "unbonding/unbondingStats/getAllUnbondingStats"
            ];
        },
    },
    methods: {
        convertDate(date) {
            date = new Date(date);
            return date.toLocaleString().substring(10);
        },
        btcBlockHasCheckpoint(epochNum) {
            return this.$store.getters[
                ("btccheckpoint/btcCheckpointStats/blockHasCheckpoint",
                epochNum)
            ]
                ? "yes"
                : "no";
        },
    },
})
</script>

<template>
    <div class="container mx-auto mb-5">
        <div class="main-grid bg-white">
            <!-- 1 -->

            <div>
                <BlockTableSection
                    heading="Latest BBN Block"
                    has-three-cols
                    col1="#"
                    col2="Hash"
                    col3="Timestamp"
                >
                    <template #count>{{ chainHeight }}</template>
                    <template #body>
                        <div
                            v-for="block in latestBlocks"
                            class="item flex justify-between"
                        >
                            <div>
                                <RouterLink
                                    :to="{ path: '/block/' + block.height }"
                                    >{{ block.height }}</RouterLink
                                >
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
                    heading="Latest BTC Block"
                    has-three-cols
                    col1="#"
                    col2="Hash"
                    col3="Has ckpts"
                >
                    <template #count>{{ btcChainHeight }}</template>
                    <template #body>
                        <div
                            v-for="block in latestBtcBlocks"
                            class="item flex justify-between"
                        >
                            <div>
                                {{ block.height }}
                            </div>
                            <div class="compress section-compress-width-2">
                                {{ block.hash }}
                            </div>
                            <div class="font-bold">
                                {{ btcBlockHasCheckpoint(block.height) }}
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
                    <template #count>{{ latestEpoch }}</template>
                    <template #body>
                        <div class="item flex justify-between">
                            <div>Accumulating</div>
                            <div class="font-bold">
                                {{ epochStatusCount.CKPT_STATUS_ACCUMULATING }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Sealed</div>
                            <div class="font-bold">
                                {{ epochStatusCount.CKPT_STATUS_SEALED }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Submitted</div>
                            <div class="font-bold">
                                {{ epochStatusCount.CKPT_STATUS_SUBMITTED }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Confirmed</div>
                            <div class="font-bold">
                                {{ epochStatusCount.CKPT_STATUS_CONFIRMED }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Finalized</div>
                            <div class="font-bold">
                                {{ epochStatusCount.CKPT_STATUS_FINALIZED }}
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
                    <template #count>{{
                        validatorStatistic.num_validators
                    }}</template>
                    <template #body>
                        <div class="item flex justify-between">
                            <div>Active</div>
                            <div class="font-bold">
                                {{ validatorStatistic.num_active }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Unbonding</div>
                            <div class="font-bold">
                                {{ validatorStatistic.num_unbonding }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Standby</div>
                            <div class="font-bold">
                                {{ validatorStatistic.num_standby }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Penalized / Jail</div>
                            <div class="font-bold">
                                {{ validatorStatistic.num_penalized }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>Ongoing Undelegating Requests</div>
                            <div class="font-bold">
                                {{
                                    allUnbondingStats.ongoingUndelegatingRequests
                                }}
                            </div>
                        </div>
                        <div class="item flex justify-between">
                            <div>
                                Completed Undelegating Requests (last 24h)
                            </div>
                            <div class="font-bold">
                                {{
                                    allUnbondingStats.completedUndelegatingRequests
                                }}
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

@media (max-width: 1280px) {
    .main-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 770px) {
    .main-grid {
        display: block;
    }
}
</style>
