<script>
export default {
    data() {
        return {
            loading: false,
            rawCheckpoint: null,
            blocks: [],
            error: null,
        };
    },

    created() {
        this.$watch(
            () => this.$route.params.epochNum,
            () => {
                this.fetchData();
            },
            { immediate: true }
        );
    },

    computed: {
        status() {
            let status = this.rawCheckpoint.raw_checkpoint.status;
            if (status == "CKPT_STATUS_ACCUMULATING") {
                return "Accumulating";
            } else if ((status = "CKPT_STATUS_SEALED")) {
                return "Sealed";
            } else if ((status = "CKPT_STATUS_SUBMITTED")) {
                return "Submitted";
            } else if ((status = "CKPT_STATUS_CONFIRMED")) {
                return "Confirmed";
            } else if ((status = "CKPT_STATUS_FINALIZED")) {
                return "Finalized";
            }
        },

        epochInterval() {
            return parseInt(
                this.$store.getters["epoching/stats/getEpochInterval"]
            );
        },
    },

    methods: {
        fetchData() {
            this.error = this.rawCheckpoint = null;
            this.loading = true;
            let epochNum = this.$route.params.epochNum;
            let searchFunction =
                "checkpointing/checkpointStats/getRawCheckpoint";

            // prevent undesirable behavior when router link completely changes
            if (typeof epochNum == "undefined") return;

            if (isNaN(epochNum) && epochNum > 0 && Number.isInteger(epochNum)) {
                this.loading = false;
                this.error = "invalid epoch number";
            }

            this.$store.dispatch(searchFunction, epochNum).then(
                (response) => {
                    this.loading = false;
                    this.rawCheckpoint = response;
                },
                (error) => {
                    this.loading = false;
                    this.error = "Checkpointing Information Unavailable";
                }
            );

            let staticEpochInterval = this.epochInterval;

            // During initialization of vuex store, epochInterval ( from this.$store.getters["epoching/stats/getEpochInterval"] )
            // is set to 0. So if the epochInterval is 0 (means that the vuex is not fully initialized yet), we create a watcher and wait until
            // this value has changed, then we perform the getBlocks function. And this watcher should only watch once (even though it shouldn't update anyway).
            if (staticEpochInterval == 0) {
                this.unwatchEpochInterval = this.$watch(
                    "epochInterval",
                    (newVal) => {
                        if (newVal) {
                            staticEpochInterval = this.epochInterval;
                            this.unwatchEpochInterval();
                            this.getBlocks(epochNum, staticEpochInterval);
                        }
                    }
                );
            } else {
                this.getBlocks(epochNum, staticEpochInterval);
            }
        },

        getBlocks(epochNum, epochInterval) {
            let begin = (epochNum - 1) * epochInterval + 1;
            let chainHeight = parseInt(
                this.$store.getters["common/blocks/getHeight"]
            );
            let end = Math.min(chainHeight, begin + epochInterval - 1);
            this.$store
                .dispatch("blocks/blockList/getBlockHeadersByHeightRange", {
                    begin,
                    end,
                })
                .then((response) => {
                    this.blocks = response;
                });
        },

        display(content) {
            return content == null ? "null" : content;
        },
    },
};
</script>

<template>
    <div class="epoch-detail-view-container">
        <div v-if="loading" class="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>

        <div v-if="rawCheckpoint" class="epoch-content">
            <div>
                <div class="epoch-title">
                    <img style="width: 2em" src="../../assets/epoch.png" />
                    <div style="font-size: 3em; margin-left: 0.2em">
                        Epoch {{ this.$route.params.epochNum }}
                    </div>
                </div>
            </div>

            <div class="stats-box">
                <hr />
                <div class="stats-box-row">
                    <div>EPOCH NUMBER</div>
                    <div>{{ rawCheckpoint.raw_checkpoint.ckpt.epoch_num }}</div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>Status</div>
                    <div>{{ status }}</div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>LAST COMMIT HASH</div>
                    <div>
                        {{ rawCheckpoint.raw_checkpoint.ckpt.last_commit_hash }}
                    </div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>BITMAP</div>
                    <div>
                        {{ display(rawCheckpoint.raw_checkpoint.ckpt.bitmap) }}
                    </div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>BLS MULTI SIG</div>
                    <div>
                        {{
                            display(
                                rawCheckpoint.raw_checkpoint.ckpt.bls_multi_sig
                            )
                        }}
                    </div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>BLS AGGR PK</div>
                    <div>
                        {{ display(rawCheckpoint.raw_checkpoint.bls_aggr_pk) }}
                    </div>
                </div>
                <hr />
                <div class="stats-box-row">
                    <div>POWER SUM</div>
                    <div>
                        {{ rawCheckpoint.raw_checkpoint.power_sum }}
                    </div>
                </div>
                <hr />
            </div>

            <div class="epoch-blocks">
                <div style="font-weight: 700; font-size: 1.5em">Blocks</div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Hash</th>
                            <th>Time</th>
                            <th>Num Txs</th>
                            <th>Proposer Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--use a for loop here-->
                        <tr v-for="block in blocks" :key="block.block_id.hash">
                            <td>
                                <RouterLink
                                    :to="{
                                        path: '/blocks/' + block.header.height,
                                    }"
                                >
                                    {{ block.header.height }}
                                </RouterLink>
                            </td>
                            <td>{{ block.block_id.hash }}</td>
                            <td>{{ block.header.time }}</td>
                            <td>{{ block.num_txs }}</td>
                            <td>{{ block.header.proposer_address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.epoch-detail-view-container {
    max-width: 1280px;
}

.epoch-title {
    display: flex;
    align-items: center;
}

.epoch-content > div {
    margin-top: 3em;
}

.stats-box {
    background: none;
    box-shadow: 1px 0px 5px 1px lightgray;
    padding: 30px;
    border-radius: 8px;
}

.stats-box-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
}

.styled-table thead tr {
    background-color: black;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid black;
}
</style>
