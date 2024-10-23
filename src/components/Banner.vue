<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out" :class="{ 'bg-white shadow-md': !isAtTop }">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex-shrink-0">
            <img class="h-10 w-auto" src="https://koombea.com/wp-content/uploads/2020/08/koombea-logo.svg" alt="Koombea Logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-6">
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">Our Work</a>
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">Careers</a>
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" class="text-gray-500 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium">Blog</a>
            </div>
          </div>
          <div class="hidden md:block">
            <a href="#" class="text-teal-500 hover:text-teal-600 px-4 py-2 rounded-md text-base font-medium">Get in Touch</a>
          </div>
        </div>
      </nav>
    </header>
  
    <section class="relative">
      <div class="bg-teal-500 pt-32 md:pt-40 pb-32 md:pb-48">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Grow Your Career<br>by Joining Koombea</h1>
            <p class="text-lg md:text-xl text-white mb-8">
              Koombea is an incredibly fun and fast-paced place to work, where the<br>
              only currency that matters is the ability to be creative and drive results.
            </p>
            <button class="bg-white text-teal-500 py-3 px-8 rounded-full font-semibold text-lg md:text-xl hover:bg-teal-100 transition duration-300">
              SEE OPEN POSITIONS
            </button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden">
        <svg viewBox="0 0 1440 320" class="wave" preserveAspectRatio="none">
          <path fill="#FFFFFF" fill-opacity="1" d="M0,288L30,293.3C60,299,120,309,180,304C240,299,300,277,360,250.7C420,224,480,192,540,192C600,192,660,224,720,245.3C780,267,840,277,900,256C960,235,1020,181,1080,160C1140,139,1200,149,1260,154.7C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAtTop: true
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isAtTop = window.pageYOffset === 0;
      }
    }
  };
  </script>
  
  <style>
  @keyframes wave {
    0% {
      transform: translateX(0) translateY(5px);
    }
    50% {
      transform: translateX(-10%) translateY(5px);
    }
    100% {
      transform: translateX(-20%) translateY(5px);
    }
  }
  
  .wave {
    animation: wave 20s ease-in-out infinite;
    width: 200%;
    height: calc(100% + 10px);
    transform: translateY(5px);
  }
  </style>