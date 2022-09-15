import validatorStats from "./validatorStats";

export default function init(store) {
    if (!store.hasModule(["validators"])) {
        store.registerModule(["validators"], { namespaced: true });
    }
    store.registerModule(["validators", "validatorStats"], validatorStats);
    store.subscribe((mutation) => {
        if (mutation.type == "common/env/INITIALIZE_WS_COMPLETE") {
            store.dispatch("validators/validatorStats/init", null, {
                root: true,
            });
        }
    });
}
