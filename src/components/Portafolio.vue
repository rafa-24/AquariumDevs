<template>
    
  <div class="portafolio -mt-32 z-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- Contenido del portafolio -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Fashioned Health Card -->
      <div class="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div class="relative">
          <img 
            src="https://www.koombea.com/wp-content/uploads/2024/05/fashion-health-bg.webp" 
            alt="Fashioned Health" 
            class="w-full h-48 object-cover"
          >
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Fashioned Health</h3>
          <p class="text-gray-600 mb-4">
            Elevating healthcare access and patient experience with Koombea's MedTech solutions.
          </p>
        </div>
      </div>

      <!-- Sonoture Card -->
      <div class="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div class="relative">
          <img 
            src="https://www.koombea.com/wp-content/uploads/2024/05/sonoture-bg-black@2x-450x0-c-default.webp" 
            alt="Sonoture" 
            class="w-full h-48 object-cover"
          >
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Sonoture</h3>
          <p class="text-gray-600 mb-4">
            Commercial real estate has never been more accessible, thanks to Sonoture's innovative approach.
          </p>
        </div>
      </div>

      <!-- Nauty360 Card -->
      <div class="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div class="relative">
          <img 
            src="https://www.koombea.com/wp-content/uploads/2024/05/Vocalcoach@2x-450x0-c-default.webp" 
            alt="Nauty360" 
            class="w-full h-48 object-cover"
          >
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Nauty360</h3>
          <p class="text-gray-600 mb-4">
            Nauty 360's platform will take you on the sea adventure of a lifetime.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portafolio'
}
</script>

<style scoped>
</style>