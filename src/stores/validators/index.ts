import validatorStats from "./validatorStats";

export default function init(store) {
    if (!store.hasModule(["validators"])) {
        store.registerModule(["validators"], { namespaced: true });
    }
    store.registerModule(["validators", "validatorStats"], validatorStats);
}
