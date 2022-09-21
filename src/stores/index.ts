import { createStore, Store } from "vuex";
import {
    blocks as starportBlocks,
    env as starportEnv,
    wallet as starportWallet,
} from "./starport";
import blocks from "./blocks/index";
import validators from "./validators/index";
import prometheus from "./prometheus/index";
import epoching from "./epoching/index";
import checkpointing from "./checkpointing/index";
import btclightclient from "./btclightclient/index";
import btccheckpoint from "./btccheckpoint/index";
import unbonding from "./unbonding/index";

// import generated from "./generated";

function init(store: any) {
    // for (const moduleInit of Object.values(generated)) {
    //     moduleInit(store);
    // }
    starportBlocks(store);
    starportEnv(store);
    starportWallet(store);
    blocks(store);
    epoching(store);
    validators(store);
    prometheus(store);
    checkpointing(store);
    btclightclient(store);
    btccheckpoint(store);
    unbonding(store);
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
