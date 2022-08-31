import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'
import './styles/index.css'
import './styles/globals.css'
import 'animate.css';

const app = createApp(App)
// app.use(createPinia())
app.use(store).use(router).mount('#app')
