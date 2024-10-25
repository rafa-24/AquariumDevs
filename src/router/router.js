import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue'; // o el componente principal de tu página
import Portfolio from '../components/Portafolio.vue'; // tu nueva página Portafolio

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio // Página del portafolio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
