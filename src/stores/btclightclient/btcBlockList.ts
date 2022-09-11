import { getMainChain } from "./api";
// import type { V1Beta1PageRequest } from "../types/pagination";

let limit = "10";

export default {
    namespaced: true,
    state() {
        return {
            btcMainChain: [],
        };
    },
    getters: {
        btcMainChain: (state) => {
            return state.btcMainChain;
        },
    },
    mutations: {
        SET_BTC_MAIN_CHAIN(state, chain) {
            state.btcMainChain = chain;
        },
    },
    actions: {
        // TODO: Implement general purpose BTCMainChain Query
        async getLatestBTCMainChain({ commit, rootGetters }) {
            try {
                const mainChain = await getMainChain(
                    rootGetters["common/env/apiCosmos"],
                    {
                        "pagination.limit": limit,
                        "pagination.reverse": true,
                    }
                );
                commit("SET_BTC_MAIN_CHAIN", mainChain.headers);
            } catch {
                throw new Error("btclightclient: Can not get the main chain");
            }
        },
    },
};
