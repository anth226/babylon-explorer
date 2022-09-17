import checkpointStats from "./checkpointStats";

export default function init(store) {
    if (!store.hasModule(["checkpointing"])) {
        store.registerModule(["checkpointing"], { namespaced: true });
    }
    store.registerModule(["checkpointing", "checkpointStats"], checkpointStats);
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("checkpointing/checkpointStats/init", null, {
                root: true,
            });
        }
    });
}
