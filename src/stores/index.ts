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

// import generated from "./generated";

function init(store: any) {
    // for (const moduleInit of Object.values(generated)) {
    //     moduleInit(store);
    // }
    starportBlocks(store);
    starportEnv(store);
    starportWallet(store);
    blocks(store);
    validators(store);
    prometheus(store);
    epoching(store);
    checkpointing(store);
    btclightclient(store);
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
