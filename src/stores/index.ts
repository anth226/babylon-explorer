import { createStore, Store } from "vuex";
import {
    blocks as starportBlocks,
    env as starportEnv,
    wallet as starportWallet,
} from "./starport";
import blocks from "./blocks/index";
import addresses from "./addresses/index";
import prometheus from "./prometheus/index";
import epoching from "./epoching/index";

// import generated from "./generated";

function init(store: any) {
    // for (const moduleInit of Object.values(generated)) {
    //     moduleInit(store);
    // }
    starportBlocks(store);
    starportEnv(store);
    starportWallet(store);
    blocks(store);
    addresses(store);
    prometheus(store);
    epoching(store);
}

const store = createStore({
    state() {
        return {};
    },
    mutations: {},
    actions: {},
});

init(store);

export default store;
