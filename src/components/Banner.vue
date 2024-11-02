<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out"
  :class="{ 'bg-white shadow-md': !isAtTop }">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="flex items-center justify-between w-full">
      <!-- Logo alineado a la izquierda -->
      <div class="flex items-center space-x-2">
        <img class="h-16 sm:h-20 w-auto" src="../assets/img/logo.png" alt="Koombea Logo">
        <span :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }" class="text-xl font-bold">
          AQUARIUM
        </span>
      </div>

      <!-- Botón hamburguesa solo visible en pantallas pequeñas -->
      <div class="block md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" 
          :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }" 
          class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menú de navegación para desktop -->
      <div class="hidden md:flex items-center space-x-4 ml-auto">
        <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">Services</a>
        <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">Our Work</a>
        <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">Careers</a>
        <!-- <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">About</a> -->
        <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">Blog</a>
        <router-link to="/portfolio" 
          :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="hover:text-blue-200 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200">
          Portafolio
        </router-link>

        <!-- <a href="#_"
          class="relative inline-flex items-center justify-center px-4 lg:px-6 py-2 overflow-hidden font-semibold text-sm lg:text-base tracking-tighter text-gray-900 bg-white rounded-full group shadow-lg hover:bg-gray-500 hover:text-white transition-all duration-200">
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="relative z-10 transition-colors duration-300 ease-out font-bold whitespace-nowrap">Get in Touch</span>
        </a> -->

        <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
          class="transition duration-300 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-gray-900 md:hidden transform origin-top shadow-lg">
        <div class="px-4 pt-2 pb-6 space-y-2">
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            Services
          </a>
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            Our Work
          </a>
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            Careers
          </a>
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            About
          </a>
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            Blog
          </a>
          <a href="#" class="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors duration-200">
            Portafolio
          </a>
          <!-- <div class="pt-4">
            <a href="#_"
              class="block w-full text-center px-4 py-3 text-gray-900 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get in Touch
            </a>
          </div> -->
        </div>
      </div>
    </transition>
  </nav>
</header>

<section class="relative">
    <!-- Fondo azul que ocupa todo el espacio necesario -->
    <div class="bg-[#050A30] min-h-[600px] md:min-h-[900px] relative">
      <!-- Contenido principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-32">
        <div class="flex flex-col md:flex-row items-center">
          <!-- Texto -->
          <div class="md:w-1/2 text-center md:text-left md:pr-8">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {{ title }}
            </h1>
            <p v-if="route.name === 'Portafolio'" class="text-lg md:text-xl text-center md:text-left text-white mb-8">
              {{ description }}
            </p>
            <button
              @click="buttonAction"
              class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-base tracking-tighter text-[#050A30] bg-white rounded-full group shadow-lg hover:bg-gray-500 hover:text-white transition duration-300">
              <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#323232] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="relative z-10 transition-colors duration-300 ease-out font-bold">{{ buttonText }}</span>
            </button>
          </div>

          <!-- Imagen SVG ajustada a la derecha y oculta en pantallas pequeñas -->
          <div class="hidden md:block ml-13 md:w-1/2 mt-8 md:mt-0 relative z-20">
            <svg xmlns="http://www.w3.org/2000/svg" :viewBox="svgViewBox" :width="svgWidth" :height="svgHeight"
              preserveAspectRatio="xMidYMid meet"
              style="width: 80%; height: 100%; transform: translate3d(0px, 0px, 0px);">
              <defs>
                <clipPath id="__lottie_element_28">
                  <rect width="1451" height="1607" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_28)">
                <g class="png" style="display: block;" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <image :width="svgWidth" :height="svgHeight" preserveAspectRatio="xMidYMid slice"
                    :xlink:href="imageUrl">
                  </image>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <!-- Nueva curva en la parte inferior -->
      <div class="absolute -bottom-1 left-0 right-0 w-full overflow-hidden z-10">
        <svg viewBox="0 0 1440 200" class="w-full h-auto md:hidden" preserveAspectRatio="none">
          <path d="M0,120 C300,120 700,120 1000,60 C1200,20 1380,10 1440,0 L1440,200 L0,200 Z" fill="#ffffff"></path>
        </svg>
        <svg viewBox="0 0 1440 600" class="w-full h-auto hidden md:block" preserveAspectRatio="none">
          <path d="M0,400 C300,400 700,400 1000,200 C1200,50 1380,40 1440,30 L1440,600 L0,600 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>

    <!-- Sección de descripción (solo para la página de careers) -->
    <div v-if="route.name !== 'Portafolio'" class="bg-white py-16 md:py-8">
      <div class="max-w-7xl mx-auto px-4 mt-2 sm:px-6 lg:px-8">
        <p class="text-lg text-center text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonAction: {
    type: Function,
    required: true
  },
  svgWidth: {
    type: String,
    default: "1451"
  },
  svgHeight: {
    type: String,
    default: "1607"
  },
  svgViewBox: {
    type: String,
    default: "0 0 1451 1607"
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const isAtTop = ref(true);
const isMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isAtTop.value = window.scrollY === 0;
};
</script>

<style scoped></style>