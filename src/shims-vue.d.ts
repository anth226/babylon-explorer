import { Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'


declare module '*.vue'

declare module '@vue/runtime-core' {

    interface State {
        count: number
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
