import blockList from "./blockList"

export default function init(store) {
  if (!store.hasModule(['blocks'])) {
    store.registerModule(['blocks'], { namespaced: true })
  }
  store.registerModule(['blocks', 'blockList'], blockList)
}
