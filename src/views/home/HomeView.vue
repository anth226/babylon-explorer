<script>
import BlockItems from '@/views/home/BlockGrid.vue'
import BlockTable from '@/views/home/BlockTable.vue'

export default {
  components: {
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
                "addresses/validatorStats/numValidators"
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
  <div id="home-veiw">
    <div class="card flex flex-row gap-2 mx-auto">
     <div class="w-1/3">
       <img class="home-img" src="../../assets/homeimg.png" alt="homeimg">
     </div>
      <div class="w-2/3 table">
        <div class="grid grid-cols-4 gap-4">
          <div class="grid-item grid-header">Unbounding validators</div>
          <div class="grid-item grid-header">
            Equested @
            <br>
            epoch #
          </div>
          <div class="grid-item grid-header">
            Checkpointed
            <br>
            @BTC block
          </div>
          <div class="grid-item grid-header">
            Approved
          </div>
          <div class="grid-item">A1B2C3D4</div>
          <div class="grid-item">13</div>
          <div class="grid-item">—</div>
          <!--Dynamic class-->
          <div class="grid-item text-left flex items-center ml-1 not-approved">
            <img class="p-0 mr-2" src="../../assets/not-approved.svg" alt="x">
            <span class="text-notApproved p-0">Not approved</span>
          </div>
          <div class="grid-item">E5F6G7H8</div>
          <div class="grid-item">12</div>
          <div class="grid-item">1220</div>
          <div class="grid-item">
            <!--Dynamic class-->
            <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
              <img class="p-0 mr-2" src="../../assets/pending.svg" alt="x">
              <span class="text-pending">Pending</span>
            </div>
          </div>
          <div class="grid-item">I9J0K1L2</div>
          <div class="grid-item">10</div>
          <div class="grid-item">1200</div>
          <div class="grid-item">
            <!--Dynamic class-->
            <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
              <img class="p-0 mr-2" src="../../assets/approved.svg" alt="x">
              <span class="text-approved">Approved</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <BlockItems />
      <BlockTable />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  width: 800px;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0 27px 81px rgba(0, 0, 0, 0.3);
  border-radius: 9px;
  padding-top: 11px;
  padding-left: 11px;
}

.home-img {
  align-items: center;
  border-radius: 9px;
}


.grid-item {
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}

.grid-header {
  font-weight: 700;
  line-height: 16px;
}

</style>
