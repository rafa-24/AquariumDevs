<template>
  <div class="font-custom">
    <Banner
      :title="bannerTitle"
      :buttonText="bannerButtonText"
      :buttonAction="bannerButtonAction"
      :imageUrl="bannerImageUrl"
    />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';

const route = useRoute();

// Datos dinámicos para el banner según la ruta
const bannerTitle = computed(() => (route.name === 'Portafolio' ? 'Nuestro Portafolio' : 'Trabaja en Aquarium'));
const bannerDescription = computed(() => (route.name === 'Portafolio' ? 'Explora nuestros proyectos.' : 'AquariumDevs es un lugar de trabajo increíblemente divertido y acelerado, donde la única moneda que importa es la capacidad de ser creativo y obtener resultados.'));
const bannerButtonText = computed(() => (route.name === 'Portafolio' ? 'Conoce nuestros proyectos' : 'SEE OPEN POSITIONS'));
const bannerButtonAction = () => { /* acción del botón */ };
  const bannerImageUrl = computed(() => (route.name === 'Portafolio' ? 'https://www.koombea.com/wp-content/uploads/2022/01/ourwork_banner_img_3.webp' : 'https://www.koombea.com/wp-content/uploads/2022/01/home-main-banner-img_2.webp'));
</script>
