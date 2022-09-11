import { Store } from 'vuex'


declare module '*.vue'

declare module '@vue/runtime-core' {

    interface State {
        count: number
    }
}
