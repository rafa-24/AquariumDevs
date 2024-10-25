import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router/router'  // Cambiado de '../src/router.js' a './router'

const app = createApp(App)
app.use(router)
app.mount('#app')