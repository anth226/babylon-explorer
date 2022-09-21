import { getCurrentEpoch, getParams } from "./api"
import type { StatsModuleState } from '@/stores/epoching/types'


export default {
    namespaced: true,

    state: {
        currentEpoch: 0,
        epochBoundary: 0,
        epochInterval: 0,
        epochs: []
    } as StatsModuleState,

    getters: {
        getCurrentEpoch:(state: StatsModuleState): number => {
            return state.currentEpoch
        },
        getEpochBoundary: (state: StatsModuleState): number => {
            return state.epochBoundary
        },
        getEpochInterval: (state: StatsModuleState): number => {
            return state.epochInterval
        },
        getLatestEpochs: (state: StatsModuleState): number[] => {
            return state.epochs
        }
    },

    mutations: {
        SET_CURRENT_EPOCH(state, currentEpoch) {
            state.currentEpoch = currentEpoch;
        },
        SET_EPOCH_BOUNDARY(state, epochBoundary) {
            state.epochBoundary = epochBoundary;
        },
        SET_EPOCH_INTERVAL(state, epochInterval) {
            state.epochInterval = epochInterval;
        },
        ADD_EPOCH(state, epoch) {
            state.epochs.push(epoch)
        },
        RESET_STATE(state) {
            state.currentEpoch = 0
            state.epochBoundary = 0
            state.epochInterval = 0
            state.epochs = []
        },
    },

    actions: {
        async init({ dispatch, rootGetters }) {
            dispatch("getCurrentEpochInformation");
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on("newEpoch", () => {
                    dispatch("getCurrentEpochInformation");
                });
            }
        },

        async getCurrentEpochInformation({ commit, rootGetters }) {
            try {
                let currentEpochData = await getCurrentEpoch(
                    rootGetters["common/env/apiCosmos"]
                );
                commit("SET_CURRENT_EPOCH", currentEpochData.current_epoch);
                commit("SET_EPOCH_BOUNDARY", currentEpochData.epoch_boundary);

                let paramsData = await getParams(
                    rootGetters["common/env/apiCosmos"]
                );
                commit("SET_EPOCH_INTERVAL", paramsData.params.epoch_interval);
            } catch (e) {
                throw new Error("Epoching: Can not get epoching data");
            }
        }
    }
}
