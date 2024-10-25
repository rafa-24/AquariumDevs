<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out font-plus-jakarta-sans"
    :class="{ 'bg-white shadow-md': !isAtTop }">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between w-full">
        <!-- Logo alineado a la izquierda -->
        <div class="flex items-center space-x-2">
          <img class="h-24 sm:h-20 w-auto" src="../assets/img/logo.png" alt="Koombea Logo">
          <span :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }" class="text-xl font-bold">
            AQUARIUM
          </span>
        </div>


        <!-- Botón hamburguesa solo visible en pantallas pequeñas -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Menú de navegación visible en pantallas medianas y más grandes -->
        <div :class="{ 'hidden': !isMenuOpen }" class="hidden md:flex items-center space-x-6 ml-auto">
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">Our Work</a>
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">Careers</a>
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }"
            class="hover:text-[#c1e8ff] px-3 py-2 rounded-md text-base font-medium">
            <router-link to="/portfolio">
              Portafolio
            </router-link>
          </a>

          <a href="#_"
            class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-base tracking-tighter text-gray-900 bg-white rounded-full group shadow-lg hover:bg-gray-500 hover:text-white">
            <span
              class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#323232] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="relative z-10 transition-colors duration-300 ease-out font-bold">Get in Touch</span>
          </a>

          <a href="#" :class="{ 'text-white': isAtTop, 'text-gray-900': !isAtTop }" class="transition duration-300 hover:text-[#323232]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Menú desplegable solo visible en pantallas pequeñas cuando se abre -->
      <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
        class="absolute top-0 left-0 w-full bg-[#050A30] md:hidden z-40">
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">Home</a>
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">Services</a>
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">Our
          Work</a>
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">Careers</a>
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">About</a>
        <a href="#"
          class="block px-6 py-4 border-b border-gray-600 text-base font-medium text-white hover:bg-gray-700">Blog</a>
        <a href="#_"
          class="block px-6 py-4 mt-4 font-semibold text-base tracking-tighter text-gray-900 bg-white rounded-full group shadow-lg hover:bg-gray-500 hover:text-white mx-auto">
          Get in Touch
        </a>
      </div>
    </nav>
  </header>

  <section class="relative">
    <div class="bg-[#050A30] pt-32 md:pt-40 pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center">
          <!-- Texto centrado en pantallas pequeñas y alineado a la izquierda en pantallas grandes -->
          <div class="md:w-1/2 text-center md:text-left md:pr-8">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Grow Your Career<br>by Joining Koombea
            </h1>
            <p class="text-lg md:text-xl text-center md:text-left text-white mb-8">
              Koombea is an incredibly fun and fast-paced place to work, where the
              only currency that matters is the ability to be creative and drive results.
            </p>
            <button
              class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-base tracking-tighter text-[#050A30] bg-white rounded-full group shadow-lg hover:bg-gray-500 hover:text-white transition duration-300">
              <span
                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#323232] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="relative z-10 transition-colors duration-300 ease-out font-bold">SEE OPEN POSITIONS</span>
            </button>
          </div>

          <!-- Imagen SVG ajustada a la derecha y oculta en pantallas pequeñas -->
          <div class="hidden md:block ml-13 md:w-1/2 mt-8 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1451 1607" width="1451" height="1607"
              preserveAspectRatio="xMidYMid meet"
              style="width: 80%; height: 100%; transform: translate3d(0px, 0px, 0px); z-index: 30;">
              <defs>
                <clipPath id="__lottie_element_28">
                  <rect width="1451" height="1607" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_28)">
                <g class="png" style="display: block;" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <image width="1451px" height="1607px" preserveAspectRatio="xMidYMid slice"
                    xlink:href="https://www.koombea.com/wp-content/uploads/2022/01/home-main-banner-img_2.webp"></image>
                </g>
                <g class="psd" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;">
                  <image width="1451px" height="1607px" preserveAspectRatio="xMidYMid slice"
                    xlink:href="https://www.koombea.com/wp-content/uploads/2022/01/home-main-banner-img_1.webp"></image>
                </g>
                <g class="psd" transform="matrix(1,0,0,1,-44,22)" opacity="1" style="display: block;">
                  <image width="1451px" height="1607px" preserveAspectRatio="xMidYMid slice"
                    xlink:href="https://www.koombea.com/wp-content/uploads/2022/01/home-main-banner-img_0.webp"></image>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenedor para la ola y el texto -->
    <div class="relative">
      <!-- Ola -->
      <div class="absolute bottom-0 left-0 right-0 h-24 md:h-48 overflow-hidden">
        <svg viewBox="0 0 1440 320" class="wave" preserveAspectRatio="none">
          <path :d="wavePath" fill="#FFFFFF" fill-opacity="1"></path>
        </svg>
      </div>

      <!-- Texto sobre la ola -->
      <div class="relative z-20 bg-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p class="text-xl font-bold text-teal-900 text-center">
            Koombea is an incredibly fun and fast-paced place to work, where the only <br class="hidden md:inline">
            currency that matters is the ability to be creative and drive results.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isAtTop: true,
      isMenuOpen: false,
      wavePath: '',
      animationFrame: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.animateWave();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    cancelAnimationFrame(this.animationFrame);
  },
  methods: {
    handleScroll() {
      this.isAtTop = window.scrollY === 0;
    },
    animateWave() {
      const animate = () => {
        const time = Date.now() * 0.00025; // Reducido para un movimiento más lento
        let path = 'M0,160 ';
        for (let i = 0; i <= 1440; i += 10) {
          const x = i;
          const y = Math.sin(i * 0.0025 + time) * 20 +
            Math.sin(i * 0.005 - time * 0.5) * 15 +
            140; // Ajustado para que la ola sea más visible
          path += `L${x},${y} `;
        }
        path += 'L1440,160 L1440,320 L0,320 Z';
        this.wavePath = path;
        this.animationFrame = requestAnimationFrame(animate);
      };
      animate();
    }
  }
};
</script>

<style>
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  transform: translateY(0);
}

@keyframes continuous-horizontal-movement {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.wave {
  animation: continuous-horizontal-movement 40s linear infinite;
}

/* Aplicar la fuente a todo el componente */
div {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>