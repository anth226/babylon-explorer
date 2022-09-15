import btcBlockList from "./btcBlockList";

export default function init(store) {
    if (!store.hasModule(["btclightclient"])) {
        store.registerModule(["btclightclient"], { namespaced: true });
    }
    store.registerModule(["btclightclient", "btcBlockList"], btcBlockList);
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("btclightclient/btcBlockList/init", null, {
                root: true,
            });
        }
    });
}
