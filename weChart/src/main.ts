import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// import './mock/index'
// import api from './api'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)


// App.prototype.$api = api
app.mount('#app')
