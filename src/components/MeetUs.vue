<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Title with decorative lines -->
    <div class="flex items-center justify-center mb-8">
      <div class="h-px bg-teal-600 flex-grow max-w-xs"></div>
      <h2 class="text-4xl font-bold text-teal-900 mx-8">Meet Us</h2>
      <div class="h-px bg-teal-600 flex-grow max-w-xs"></div>
    </div>

    <!-- Description text -->
    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
      We are a big family of geeks who are passionate about all things technology-related. Our drive is
      our desire to innovate. Our culture stands on the pillars of respect and discipline.
    </p>

    <!-- Image grid container -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <!-- Large image - 3 columns -->
      <div class="lg:col-span-3 lg:row-span-2">
        <div class="h-full">
          <img 
            src="../assets/img/cafe.jpg"
            alt="Team meeting"
            class="w-full h-[99%] object-cover rounded"
          />
        </div>
      </div>

      <!-- Right column with two stacked images - 2 columns -->
      <div class="lg:col-span-2 space-y-4">
        <!-- Top image -->
        <div class="aspect-w-16 aspect-h-9">
          <img 
            src="../assets/img/cafe.jpg"
            alt="Small team discussion"
            class="w-full h-full object-cover rounded"
          />
        </div>
        <!-- Bottom image -->
        <div class="aspect-w-16 aspect-h-9">
          <img 
            src="../assets/img/cafe.jpg"
            alt="Team collaboration"
            class="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>
