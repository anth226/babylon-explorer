<script>
import ApprovalTable from './ApprovalTable.vue'
import BlockItems from '@/views/home/BlockGrid.vue'
import BlockTable from '@/views/home/BlockTable.vue'

export default {
    name: 'HomeView',
    components: {
        ApprovalTable,
        BlockItems,
        BlockTable
    },
    beforeMount() {
        this.$store.dispatch("addresses/validatorStats/getNumValidators");
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
                "addresses/validatorStats/numValidators"];
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
  <div id="home-veiw">
      <ApprovalTable />
      <BlockItems />
      <BlockTable />
  </div>
</template>

