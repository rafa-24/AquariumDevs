<template>
    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Open Positions Header -->
      <div class="flex items-center justify-center mb-20 sm:mb-24">
        <div class="h-0.5 bg-teal-400 w-72"></div>
        <h2 class="text-5xl font-bold text-teal-900 px-8">Open Positions</h2>
        <div class="h-0.5 bg-teal-400 w-72"></div>
      </div>
  
      <!-- Glassdoor Reviews Section -->
      <div class="mb-14">
        <div class="flex items-center">
          <h3 class="text-5xl font-bold text-teal-900">Glassdoor Reviews</h3>
          <div class="h-0.5 bg-teal-400 w-full ml-4"></div>
        </div>
      </div>
  
      <!-- Reviews Content -->
      <div class="flex flex-col md:flex-row md:items-center gap-16 items-center justify-center">
        <!-- CEO Profile -->
        <div class="flex items-center gap-6">
          <div class="relative w-16 h-16 md:w-20 md:h-20">
            <div class="absolute inset-0">
              <div class="w-full h-full rounded-full border-2 border-[#050A30] "></div>
            </div>
            <img 
              src="../assets/img/perfil.jpg" 
              alt="Jonathan Tarud"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h4 class="text-2xl md:text-3xl font-bold text-teal-900">Jonathan Tarud</h4>
            <p class="text-lg text-gray-600 mb-2">CEO, Koombea</p>
            <div class="flex items-center gap-2">
              <span class="text-xl font-bold text-teal-900">4.6</span>
              <div class="flex">
                <svg v-for="i in 4" :key="i" class="w-5 h-5 text-[#050A30] " fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-5 h-5 text-teal-100" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Statistics -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 md:mt-0">
          <!-- Recommend to a friend -->
          <div class="flex flex-col items-center">
            <div class="relative w-24 h-24 mb-4">
              <svg class="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  stroke-width="6"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="45"
                  fill="none"
                  stroke="#06B6D4"
                  stroke-width="6"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="8.48"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-2xl font-bold text-teal-900">97%</span>
              </div>
            </div>
            <span class="text-lg text-teal-900">Recommend to a friend</span>
          </div>
  
          <!-- Approve of CEO -->
          <div class="flex flex-col items-center">
            <div class="relative w-24 h-24 mb-4">
              <svg class="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  stroke-width="6"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="45"
                  fill="none"
                  stroke="#06B6D4"
                  stroke-width="6"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="2.83"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-2xl font-bold text-teal-900">99%</span>
              </div>
            </div>
            <span class="text-lg text-teal-900">Approve of CEO</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script setup needed
  </script>
  
  <style>

  /* Estilos para los círculos de progreso */
  circle {
    transition: stroke-dashoffset 0.8s ease-in-out;
  }
  
  /* Media queries específicas */
  @media (max-width: 768px) {
    .statistics-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>