<script lang="ts">
import ApprovalTable from './ApprovalTable.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import BlockTable from './block-table/BlockTable.vue'
import BtcBlockGrid from './btc-block/BtcBlockGrid.vue'
import EpochGrid from './epoch/EpochGrid.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        NavBarComponent,
        BlockTable,
        BtcBlockGrid,
        EpochGrid
    },
    beforeMount() {
        this.$store.dispatch("addresses/validatorStats/getNumValidators")
    },
    computed: {
        chainHeight() {
            return this.$store.getters["common/blocks/getHeight"]
        },
        numTotalTxs() {
            let chainId = this.$store.getters["common/env/chainId"]
            let parameter =
                'tendermint_consensus_num_txs{chain_id="' + chainId + '"}'
            return this.$store.getters["prometheus/metrics"][parameter]
        },
        numValidators() {
            return this.$store.getters[
                "addresses/validatorStats/numValidators"
                ]
        },
        latestEpoch() {
            return this.$store.getters["epoching/stats/getCurrentEpoch"]
        },
        latestBlocks() {
            try {
                return this.$store.getters["common/blocks/getBlocks"](8)
            } catch {
                return []
            }
        },
    },
}
</script>

<template>
    <div class="wrapper pb-4">
        <img class="overlay" src="../../assets/nav-overlay.png" alt="nav-overlay" />
        <div class="container mx-auto pt-5">
            <ApprovalTable />
        </div>
    </div>
    <div class="container mx-auto">
        <div class="content">
            <div class="wrapper">
                <BtcBlockGrid />
                <EpochGrid />
            </div>
            <BlockTable />
        </div>
    </div>
<!--    <h1 class="font-bold">DATA:</h1>-->
<!--    <ul class="mt-3">-->
<!--        <li>Chain height - {{ chainHeight }}</li>-->
<!--        <li>Num total txs - {{ numTotalTxs }}</li>-->
<!--        <li>Latest Epoch - {{ latestEpoch }}</li>-->
<!--        <li>Num validators - {{ numValidators }}</li>-->
<!--    </ul>-->
<!--    <div class="mt-5">-->
<!--        <h1 class="font-semibold">Latest blocks: </h1>-->
<!--        <ul class="mt-4">-->
<!--            <li v-for="block in latestBlocks" :key="block.id">-->
<!--                <hr>-->
<!--                Height: {{block.height}}-->
<!--                <br>-->
<!--                Size: {{block.size}}-->
<!--                <br>-->
<!--                Hash: {{block.hash}}-->
<!--                <br>-->
<!--                Proposer: {{block.proposer}}-->
<!--                <br>-->
<!--                Time: {{block.timestamp}}-->
<!--                <hr>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </div>-->
</template>

<style scoped>
.content {
    margin: 0 85px;
}

.overlay {
    position: absolute;
    top: -10px;
    left: 0;
    z-index: -1;
}

@media(max-width: 1200px) {
    .content {
        margin: 0;
    }
}

@media (max-width: 1538px) {
    .wrapper {
        display: none;
    }
}
</style>
