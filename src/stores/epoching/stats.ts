import { getCurrentEpoch, getParams } from "./api"

export default {
    namespaced: true,
    state() {
        return {
            currentEpoch: 0,
            epochBoundary: 0,
            epochInterval: 0,
        }
    },
    getters: {
        getCurrentEpoch: (state) => {
            return state.currentEpoch
        },
        getEpochBoundary: (state) => {
            return state.epochBoundary
        },
        getEpochInterval: (state) => {
            
            return state.epochInterval
        },
    },
    mutations: {
        SET_CURRENT_EPOCH(state, currentEpoch) {
            state.currentEpoch = currentEpoch
        },
        SET_EPOCH_BOUNDARY(state, epochBoundary) {
            state.epochBoundary = epochBoundary
        },
        SET_EPOCH_INTERVAL(state, epochInterval) {
            state.epochInterval = epochInterval
        },
        RESET_STATE(state) {
            state.currentEpoch = 0
            state.epochBoundary = 0
            state.epochInterval = 0
        },
    },
    actions: {
        async init({ dispatch, rootGetters }) {
            dispatch("getData")
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on("newblock", () => {
                    dispatch("getData")
                })
            }
        },

        async getData({ commit, rootGetters }) {
            try {
                let currentEpochData = await getCurrentEpoch(
                    rootGetters["common/env/apiCosmos"]
                )
                commit("SET_CURRENT_EPOCH", currentEpochData.current_epoch)
                commit("SET_EPOCH_BOUNDARY", currentEpochData.epoch_boundary)

                let paramsData = await getParams(
                    rootGetters["common/env/apiCosmos"]
                )
                commit("SET_EPOCH_INTERVAL", paramsData.params.epoch_interval)
            } catch (e) {
                throw new Error("Epoching: Can not get epoching data")
            }
        },
    },
}
