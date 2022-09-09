import {
    getHeight,
    getBlockByHeight,
    getBlockByHash,
    getBlockHeaders,
} from "./api";

const pageSize = 10;

export default {
    namespaced: true,
    state() {
        return {
            blocks: [],
            height: 0,
            nextQueryStart: 0,
            hasNext: false,
        }
    },
    getters: {
        getHeight: (state) => {
            return state.height
        },
        getBlocks: (state) => {
            return state.blocks
        },
        getBlockByHeight: (state) => (height) => {
            return state.blocks.find((x) => x.height == height) || {}
        },
        getHasNext: (state) => {
            return state.hasNext
        },
    },
    mutations: {
        ADD_BLOCK(state, block) {
<<<<<<< HEAD
            state.blocks.push(block)
            // state.blocks.sort((a, b) => {
            //     b.height - a.height
            // }) //TODO: might be unecessary?
=======
            state.blocks.push(block);
>>>>>>> main
        },
        SET_HEIGHT(state, height) {
            state.height = height
        },
        SET_NEXT_QUERY(state, nextQueryStart) {
            state.nextQueryStart = nextQueryStart
            state.hasNext = nextQueryStart != 0
        },
        RESET_STATE(state) {
            state.blocks = []
        },
    },
    actions: {
        async init({ dispatch, commit, rootGetters }) {
            try {
                dispatch("resetState");
                let height = await getHeight(
                    rootGetters["common/env/apiTendermint"]
                );
                commit("SET_HEIGHT", height);
                const nextQueryStart = Math.max(height - pageSize, 0);
                commit("SET_NEXT_QUERY", nextQueryStart);
                for (let i = height; i > nextQueryStart; i--) {
                    let block = await getBlockByHeight(
                        rootGetters["common/env/apiCosmos"],
                        rootGetters["common/env/apiTendermint"],
                        i
                    );
                    commit("ADD_BLOCK", block);
                }
            } catch (e) {
                throw new Error("BlockList: Can not init blocklist");
            }
        },

        async getNext({ commit, rootGetters, state }) {
            try {
                if (!state.hasNext) {
                    return;
                }
                const start = state.nextQueryStart;
                const nextQueryStart = Math.max(start - pageSize, 0);
                commit("SET_NEXT_QUERY", nextQueryStart);
                for (let i = start; i > nextQueryStart; i--) {
                    let block = await getBlockByHeight(
                        rootGetters["common/env/apiCosmos"],
                        rootGetters["common/env/apiTendermint"],
                        i
                    );
                    commit("ADD_BLOCK", block);
                }
            } catch (e) {
                throw new Error("BlockList: Can not get next chunk of blocks");
            }
        },

        async getBlockByHeight({ rootGetters }, block_height) {
            return new Promise(async (resolve, reject) => {
                try {
                    let block = await getBlockByHeight(
                        rootGetters["common/env/apiCosmos"],
                        rootGetters["common/env/apiTendermint"],
                        block_height
                    )
                    resolve(block)
                } catch {
                    reject(
                        new Error(
                            "Blocks: Unable to retrieve single block with hash from backend. Height: " +
                                block_height
                        )
                    )
                }
            })
        },

        async getBlockByHash({ rootGetters }, block_hash) {
            return new Promise(async (resolve, reject) => {
                try {
                    let block = await getBlockByHash(
                        rootGetters["common/env/apiCosmos"],
                        rootGetters["common/env/apiTendermint"],
                        block_hash
                    )
                    resolve(block)
                } catch {
                    reject(
                        new Error(
                            "Blocks: Unable to retrieve single block with hash from backend. Height: " +
                                block_hash
                        )
                    )
                }
            })
        },

        async getBlockHeadersByHeightRange(
            { rootGetters },
            range: {
                begin: number;
                end: number;
            }
        ) {
            let blockHeaders = await getBlockHeaders(
                rootGetters["common/env/apiTendermint"],
                range.begin,
                range.end
            );
            return blockHeaders.result.block_metas;
        },

        resetState({ commit }) {
            commit("RESET_STATE")
        },
    },
}
