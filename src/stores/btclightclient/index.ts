import btcBlockList from "./btcBlockList";

export default function init(store) {
    if (!store.hasModule(["btclightclient"])) {
        store.registerModule(["btclightclient"], { namespaced: true });
    }
    store.registerModule(["btclightclient", "btcBlockList"], btcBlockList);
}
