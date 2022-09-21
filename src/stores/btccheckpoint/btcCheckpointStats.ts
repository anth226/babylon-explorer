import { getBtcCheckpointHeight } from "./api";
import { getCurrentEpoch } from "../epoching/api";
export default {
    namespaced: true,
    state() {
        return {
            btcBlockWithCheckpoints: new Set<string>(),
        };
    },
    getters: {
        blockHasCheckpoint: (state) => (height) => {
            return state.btcBlockWithCheckpoints.has(height);
        },
    },
    mutations: {
        ADD_BLOCK_WITH_CHECKPOINT(state, height) {
            state.btcBlockWithCheckpoints.add(height);
        },
    },
    actions: {
        // TODO: More testing
        async init({ dispatch, rootGetters }) {
            dispatch("getBtcBlocksWithEpochs");
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on(
                    "newCheckpointSubmitted",
                    (newCheckpointInfo) => {
                        let epoch =
                            JSON.parse(newCheckpointInfo).ckpt.epoch_num;
                        dispatch("getBtcBlocksWithEpoch", epoch);
                    }
                );
            }
        },
        async getBtcBlocksWithEpochs({ commit, dispatch, rootGetters }) {
            let currentEpochData = await getCurrentEpoch(
                rootGetters["common/env/apiCosmos"]
            );
            let currentEpoch = currentEpochData.current_epoch;
            for (
                let i = currentEpoch - 1;
                i > Math.max(1, currentEpoch - 50); //checks the last 50 epochs. This is currently an arbitrary number and it depends entirely on the number of BTC blocks that we show, the time between BTC blocks, and the time between epochs.
                i--
            ) {
                dispatch("getBtcBlocksWithEpoch", i);
            }
        },
        async getBtcBlocksWithEpoch({ commit, dispatch, rootGetters }, epoch) {
            try {
                let heightData = await dispatch(
                    "getBtcCheckpointHeight",
                    epoch
                );
                commit(
                    "ADD_BLOCK_WITH_CHECKPOINT",
                    heightData.earliest_btc_block_number
                );
            } catch {}
        },
        async getBtcCheckpointHeight({ rootGetters }, epochNum) {
            return new Promise(async (resolve, reject) => {
                try {
                    let checkpoint = await getBtcCheckpointHeight(
                        rootGetters["common/env/apiCosmos"],
                        epochNum
                    );
                    resolve(checkpoint);
                } catch {
                    reject(
                        new Error(
                            "BTCCheckpointStats: Unable to retrieve checkpoint information. epoch_num: " +
                                epochNum
                        )
                    );
                }
            });
        },
    },
};
