import btcCheckpointStats from "./btcCheckpointStats";

export default function init(store) {
    if (!store.hasModule(["btccheckpoint"])) {
        store.registerModule(["btccheckpoint"], { namespaced: true });
    }
    store.registerModule(
        ["btccheckpoint", "btcCheckpointStats"],
        btcCheckpointStats
    );
}
