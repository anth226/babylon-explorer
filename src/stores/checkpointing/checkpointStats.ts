import { getRawCheckpoint, getRecentEpochStatusCount } from "./api";
import { getCurrentEpoch } from "../epoching/api";
export default {
    namespaced: true,
    state() {
        return {
            CKPT_STATUS_ACCUMULATING: 0,
            CKPT_STATUS_SEALED: 0,
            CKPT_STATUS_SUBMITTED: 0,
            CKPT_STATUS_CONFIRMED: 0,
            CKPT_STATUS_FINALIZED: 0,
        };
    },
    getters: {
        getEpochStatusCount: (state) => {
            return state;
        },
    },
    mutations: {
        SET_EPOCH_STATUS_COUNT(state, counts) {
            // resetting
            for (let key in state) {
                state[key] = 0;
            }

            for (let key in counts) {
                let value = counts[key];
                state[key] = parseInt(value);
            }
        },
        INCREMENT_ACCUMULATING_COUNT(state) {
            state.CKPT_STATUS_ACCUMULATING += 1;
        },
        INCREMENT_SEALED_COUNT(state) {
            state.CKPT_STATUS_ACCUMULATING -= 1;
            state.CKPT_STATUS_SEALED += 1;
        },
        INCREMENT_SUBMITTED_COUNT(state) {
            state.CKPT_STATUS_SEALED -= 1;
            state.CKPT_STATUS_SUBMITTED += 1;
        },
        INCREMENT_CONFIRMED_COUNT(state) {
            state.CKPT_STATUS_SUBMITTED -= 1;
            state.CKPT_STATUS_CONFIRMED += 1;
        },
        INCREMENT_FINALIZED_COUNT(state) {
            state.CKPT_STATUS_CONFIRMED -= 1;
            state.CKPT_STATUS_FINALIZED += 1;
        },
    },
    actions: {
        async init({ dispatch, commit, rootGetters }) {
            dispatch("getCheckpointStatus");
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on(
                    "newCheckpointAccumulating",
                    () => {
                        commit("INCREMENT_ACCUMULATING_COUNT");
                    }
                );
                rootGetters["common/env/client"].on(
                    "newCheckpointSealed",
                    () => {
                        commit("INCREMENT_SEALED_COUNT");
                    }
                );
                rootGetters["common/env/client"].on(
                    "newCheckpointSubmitted",
                    () => {
                        commit("INCREMENT_SUBMITTED_COUNT");
                    }
                );
                rootGetters["common/env/client"].on(
                    "newCheckpointConfirmed",
                    () => {
                        commit("INCREMENT_CONFIRMED_COUNT");
                    }
                );
                rootGetters["common/env/client"].on(
                    "newCheckpointFinalized",
                    () => {
                        commit("INCREMENT_FINALIZED_COUNT");
                    }
                );
            }
        },

        async getCheckpointStatus({ commit, rootGetters }) {
            try {
                let currentEpochData = await getCurrentEpoch(
                    rootGetters["common/env/apiCosmos"]
                );
                let info = await getRecentEpochStatusCount(
                    rootGetters["common/env/apiCosmos"],
                    currentEpochData.current_epoch - 1
                );
                commit("SET_EPOCH_STATUS_COUNT", info.status_count);
            } catch {
                new Error(
                    "CheckpointStats: Unable to retrieve accumulated checkpoint status information"
                );
            }
        },

        async getRawCheckpoint({ rootGetters }, epochNum) {
            return new Promise(async (resolve, reject) => {
                try {
                    let rawCheckpoint = await getRawCheckpoint(
                        rootGetters["common/env/apiCosmos"],
                        epochNum
                    );
                    resolve(rawCheckpoint);
                } catch {
                    reject(
                        new Error(
                            "CheckpointStats: Unable to retrieve checkpoint information. epoch_num: " +
                                epochNum
                        )
                    );
                }
            });
        },
    },
};
