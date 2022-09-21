import unbondingStats from "./unbondingStats";

export default function init(store) {
    if (!store.hasModule(["unbonding"])) {
        store.registerModule(["unbonding"], { namespaced: true });
    }
    store.registerModule(["unbonding", "unbondingStats"], unbondingStats);
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("unbonding/unbondingStats/init", null, {
                root: true,
            });
        }
    });
}
