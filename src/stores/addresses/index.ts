import validatorStats from "./validatorStats"

export default function init(store) {
  if (!store.hasModule(['addresses'])) {
    store.registerModule(['addresses'], { namespaced: true })
  }
  store.registerModule(['addresses', 'validatorStats'], validatorStats)
}
