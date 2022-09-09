import checkpointStats from "./checkpointStats";

export default function init(store) {
    if (!store.hasModule(["checkpointing"])) {
        store.registerModule(["checkpointing"], { namespaced: true });
    }
    store.registerModule(["checkpointing", "checkpointStats"], checkpointStats);
}
