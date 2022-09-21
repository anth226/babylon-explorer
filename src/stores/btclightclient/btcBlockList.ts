import { getMainChain } from "./api";

export default {
    namespaced: true,
    state() {
        return {
            btcHeight: 0,
            btcMainChain: [],
        };
    },
    getters: {
        getBtcMainChain: (state) => (howmany) => {
            return state.btcMainChain.slice(
                0,
                Math.min(howmany, state.btcMainChain.length)
            );
        },
        getBtcHeight: (state) => {
            return state.btcHeight;
        },
    },
    mutations: {
        SET_BTC_MAIN_CHAIN(state, chain) {
            state.btcMainChain = chain;
        },
        SET_BTC_HEIGHT(state, height) {
            state.btcHeight = height;
        },
    },
    actions: {
        async init({ dispatch, rootGetters }) {
            dispatch("getLatestBTCMainChain");
            if (rootGetters["common/env/client"]) {
                rootGetters["common/env/client"].on(
                    "newBTCHeaderInserted",
                    () => {
                        dispatch("getLatestBTCMainChain");
                    }
                );
            }
        },
        async getLatestBTCMainChain({ commit, rootGetters }, limit) {
            try {
                const mainChain = await getMainChain(
                    rootGetters["common/env/apiCosmos"],
                    {
                        "pagination.limit": limit,
                    }
                );
                commit("SET_BTC_MAIN_CHAIN", mainChain.headers);
                commit("SET_BTC_HEIGHT", mainChain.headers[0].height);
            } catch {
                throw new Error("btclightclient: Can not get the main chain");
            }
        },
    },
};
