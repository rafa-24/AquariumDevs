import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css'
import router from './router/router.js'; // Asegúrate de importar el router

const app = createApp(App);

app.use(router); // Usar el router en la aplicación
app.mount('#app');
