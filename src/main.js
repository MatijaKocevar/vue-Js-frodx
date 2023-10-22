import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createPinia } from 'pinia'
import highlight from './directives/highlight'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('highlight', highlight)

app.mount('#app')
