import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)
// app.use(createPinia())
app.use(store).use(router).mount('#app')
