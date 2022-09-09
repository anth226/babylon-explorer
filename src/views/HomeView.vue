<script>
export default {
    beforeMount() {
        this.$store.dispatch("validators/validatorStats/getValidatorSetStatus");
        this.$store.dispatch("btclightclient/btcBlockList/getBTCMainChain");
    },
    computed: {
        chainHeight() {
            return this.$store.getters["common/blocks/getHeight"];
        },

        numTotalTxs() {
            let chainId = this.$store.getters["common/env/chainId"];
            let parameter =
                'tendermint_consensus_num_txs{chain_id="' + chainId + '"}';
            return this.$store.getters["prometheus/metrics"][parameter];
        },

        numValidators() {
            return this.$store.getters[
                "validators/validatorStats/numValidators"
            ];
        },

        latestEpoch() {
            return this.$store.getters["epoching/stats/getCurrentEpoch"];
        },

        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8);
            } catch {
                return [];
            }
        },
    },
};
</script>

<template>
    <div class="homeview-container">
        <div class="top-stats">
            <div class="top-stats-content">
                <div class="top-stats-content-title">Blocks</div>
                <RouterLink to="/blocks" style="text-decoration: none">
                    <div class="top-stats-content-value">{{ chainHeight }}</div>
                </RouterLink>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">Total Txs</div>
                <div class="top-stats-content-value">{{ numTotalTxs }}</div>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">Latest Epoch</div>
                <RouterLink to="/epochs" style="text-decoration: none">
                    <div class="top-stats-content-value">{{ latestEpoch }}</div>
                </RouterLink>
            </div>
            <div class="top-stats-content">
                <div class="top-stats-content-title">Validators</div>
                <div class="top-stats-content-value">{{ numValidators }}</div>
            </div>
        </div>

        <div class="latest-blocks">
            <div
                style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                "
            >
                <div style="font-weight: 700; font-size: 1.5em">
                    Latest Blocks
                </div>
                <RouterLink to="/blocks" class="moreButton">more</RouterLink>
            </div>
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
                    <tr v-for="block in latestBlocks" :key="block.height">
                        <td>
                            <RouterLink
                                :to="{ path: '/blocks/' + block.height }"
                            >
                                {{ block.height }}
                            </RouterLink>
                        </td>
                        <td>{{ block.hash }}</td>
                        <td>{{ block.timestamp }}</td>
                        <td>{{ block.txDecoded.length }}</td>
                        <td>{{ block.proposer }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.homeview-container {
    max-width: 1280px;
}

.homeview-container > div {
    margin-bottom: 3em;
}
.top-stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.top-stats-content {
    display: flex;
    flex-direction: column;
}
.top-stats-content-title {
    color: #666666;
}
.top-stats-content-value {
    color: #2170ff;
}

.moreButton {
    color: #333333;
    text-decoration: none;
}
.moreButton:hover {
    color: #2170ff;
    text-decoration: underline;
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
    /* background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);; */
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
