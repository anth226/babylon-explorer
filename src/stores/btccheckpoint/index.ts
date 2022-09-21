import btcCheckpointStats from "./btcCheckpointStats";

export default function init(store) {
    if (!store.hasModule(["btccheckpoint"])) {
        store.registerModule(["btccheckpoint"], { namespaced: true });
    }
    store.registerModule(
        ["btccheckpoint", "btcCheckpointStats"],
        btcCheckpointStats
    );
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("btccheckpoint/btcCheckpointStats/init", null, {
                root: true,
            });
        }
    });
}
