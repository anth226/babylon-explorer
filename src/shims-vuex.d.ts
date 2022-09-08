import { store } from './stores'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: store
    }
}
