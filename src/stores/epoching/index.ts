import epoching from "./stats";

export default function init(store) {
    if (!store.hasModule(["epoching"])) {
        store.registerModule(["epoching"], { namespaced: true });
    }
    store.registerModule(["epoching", "stats"], epoching);
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("epoching/stats/init", null, { root: true });
        }
    });
}
