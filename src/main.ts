import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { key, store } from './store'
import '@/styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
