import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Portafolio from '../components/Portafolio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portafolio',
    component: Portafolio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;