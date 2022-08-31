<script>
export default {
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
<!--    <div class="homeview-container">-->
<!--        <div class="top-stats">-->
<!--            <div class="top-stats-content">-->
<!--                <div class="top-stats-content-title">Blocks</div>-->
<!--                <RouterLink to="/blocks" style="text-decoration: none">-->
<!--                    <div class="top-stats-content-value">{{ chainHeight }}</div>-->
<!--                </RouterLink>-->
<!--            </div>-->
<!--            <div class="top-stats-content">-->
<!--                <div class="top-stats-content-title">Total Txs</div>-->
<!--                <div class="top-stats-content-value">{{ numTotalTxs }}</div>-->
<!--            </div>-->
<!--            <div class="top-stats-content">-->
<!--                <div class="top-stats-content-title">Latest Epoch</div>-->
<!--                <RouterLink to="/epochs" style="text-decoration: none">-->
<!--                    <div class="top-stats-content-value">{{ latestEpoch }}</div>-->
<!--                </RouterLink>-->
<!--            </div>-->
<!--            <div class="top-stats-content">-->
<!--                <div class="top-stats-content-title">Validators</div>-->
<!--                <div class="top-stats-content-value">{{ numValidators }}</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="latest-blocks">-->
<!--            <div-->
<!--                style="-->
<!--                    display: flex;-->
<!--                    justify-content: space-between;-->
<!--                    align-items: center;-->
<!--                "-->
<!--            >-->
<!--                <div style="font-weight: 700; font-size: 1.5em">-->
<!--                    Latest Blocks-->
<!--                </div>-->
<!--                <RouterLink to="/blocks" class="moreButton">more</RouterLink>-->
<!--            </div>-->
<!--            <table class="styled-table">-->
<!--                <thead>-->
<!--                    <tr>-->
<!--                        <th>Height</th>-->
<!--                        <th>Hash</th>-->
<!--                        <th>Time</th>-->
<!--                        <th>Num Txs</th>-->
<!--                        <th>Proposer Address</th>-->
<!--                    </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                    &lt;!&ndash;use a for loop here&ndash;&gt;-->
<!--                    <tr v-for="block in latestBlocks" :key="block.height">-->
<!--                        <td>-->
<!--                            <RouterLink-->
<!--                                :to="{ path: '/blocks/' + block.height }"-->
<!--                            >-->
<!--                                {{ block.height }}-->
<!--                            </RouterLink>-->
<!--                        </td>-->
<!--                        <td>{{ block.hash }}</td>-->
<!--                        <td>{{ block.timestamp }}</td>-->
<!--                        <td>{{ block.txDecoded.length }}</td>-->
<!--                        <td>{{ block.proposer }}</td>-->
<!--                    </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--        </div>-->
<!--    </div>-->
  <div id="home-veiw">
    <div class="card flex flex-row gap-2 mx-auto">
     <div class="w-1/3">
       <img class="home-img" src="../assets/homeimg.png" alt="homeimg">
     </div>
      <div class="w-2/3 table">

<!--        <div class="overflow-x-auto relative">-->
<!--          <table class="w-full text-left">-->
<!--            <thead class="uppercase bg-gray-50">-->
<!--            <tr>-->
<!--              <th scope="col" class="py-3 px-6 table-heading">-->
<!--                Unbonding validators-->
<!--              </th>-->
<!--              <th scope="col" class="py-3 px-6">-->
<!--                Color-->
<!--              </th>-->
<!--              <th scope="col" class="py-3 px-6">-->
<!--                Category-->
<!--              </th>-->
<!--              <th scope="col" class="py-3 px-6">-->
<!--                Price-->
<!--              </th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">-->
<!--              <th scope="row" class="px-6 whitespace-nowrap">-->
<!--                Apple MacBook Pro 17"-->
<!--              </th>-->
<!--              <td class="px-6">-->
<!--                Sliver-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                Laptop-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                $2999-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">-->
<!--              <th scope="row" class="px-6 whitespace-nowrap">-->
<!--                Microsoft Surface Pro-->
<!--              </th>-->
<!--              <td class="px-6">-->
<!--                White-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                Laptop PC-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                $1999-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr class="bg-white dark:bg-gray-800">-->
<!--              <th scope="row" class="px-6 whitespace-nowrap">-->
<!--                Magic Mouse 2-->
<!--              </th>-->
<!--              <td class="px-6">-->
<!--                Black-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                Accessories-->
<!--              </td>-->
<!--              <td class="px-6">-->
<!--                $99-->
<!--              </td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->


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
            <img class="p-0 mr-2" src="../assets/not-approved.svg" alt="x">
            <span class="text-notApproved p-0">Not approved</span>
          </div>
          <div class="grid-item">E5F6G7H8</div>
          <div class="grid-item">12</div>
          <div class="grid-item">1220</div>
          <div class="grid-item">
            <!--Dynamic class-->
            <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
              <img class="p-0 mr-2" src="../assets/pending.svg" alt="x">
              <span class="text-pending">Pending</span>
            </div>
          </div>
          <div class="grid-item">I9J0K1L2</div>
          <div class="grid-item">10</div>
          <div class="grid-item">1200</div>
          <div class="grid-item">
            <!--Dynamic class-->
            <div class="grid-item border-0 text-left flex items-center not-approved p-0 ml-1 pending">
              <img class="p-0 mr-2" src="../assets/approved.svg" alt="x">
              <span class="text-approved">Approved</span>
            </div>
          </div>
        </div>


      </div>
    </div>
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
