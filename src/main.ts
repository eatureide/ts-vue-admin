import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './store'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
