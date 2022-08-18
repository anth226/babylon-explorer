import blocks from './prometheus'

export default function init(store) {
  store.registerModule(['prometheus'], blocks)
  store.subscribe((mutation) => {
    if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
      store.dispatch('prometheus/init', null, { root: true })
    }
  })
}
