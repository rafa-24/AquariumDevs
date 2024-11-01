<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header with decorative lines -->
    <div class="flex items-center justify-center mb-14">
      <div class="h-0.5 bg-teal-400 w-72"></div>
      <h2 class="text-5xl font-bold text-teal-900 px-8">Employee Benefits</h2>
      <div class="h-0.5 bg-teal-400 w-72"></div>
    </div>

    <!-- Description -->
    <div class="mb-20">
      <p class="text-center text-teal-900 text-lg max-w-3xl mx-auto">
        Our employees matter. That's why we offer paid time off, 401k match, and competitive salaries. 
        Plus some extras you might not expect.
      </p>
    </div>

    <!-- Benefits Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
      <!-- Flexible Work Hours -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20 10h-6a2 2 0 00-2 2v40M50 10h6a2 2 0 012 2v40M20 30h24M20 20h24M20 40h14" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Flexible Work Hours</h3>
        <p class="text-teal-900">
          We take balance between work and life very seriously. On top of paid holidays, chill out with paid time off (PTO) that you can spend any way you want. We also offer the option to work from home so you can make your own hours and work from anywhere that fits your needs.
        </p>
      </div>

      <!-- Casual Every Day -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M32 12v40M20 24h24M24 44l8-8 8 8" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Casual Every Day</h3>
        <p class="text-teal-900">
          Wear clothes that make you feel comfortable because we are casual, we don't require business attire when you're in the office.
        </p>
      </div>

      <!-- Health Insurance -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M32 16l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1 4-8z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Health Insurance</h3>
        <p class="text-teal-900">
          We offer a variety of comprehensive medical, dental, vision and life insurance plans that are designed to fit the diverse needs of you and your family.
        </p>
      </div>

      <!-- Healthy Food -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M24 16c0 8.837 7.163 16 16 16s16-7.163 16-16M12 16h40M16 48h32" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Healthy Food and Snacks Program</h3>
        <p class="text-teal-900">
          When you're in the office, enjoy a stocked kitchen with snacks and espresso.
        </p>
      </div>

      <!-- Further your skill sets -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="32" cy="32" r="24"/>
            <path d="M32 20v24M20 32h24" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Further your skill sets</h3>
        <p class="text-teal-900">
          We offer an array of wellness programs, including mental health, professional development, and more.
        </p>
      </div>

      <!-- Entertainment Spaces -->
      <div>
        <div class="flex justify-start mb-6">
          <svg class="w-16 h-16 text-[#050A30] " viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="12" y="12" width="40" height="40" rx="4"/>
            <path d="M24 32l4 4 12-12" stroke-linecap="round"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-teal-900 mb-4">Entertainment Spaces for leisure time</h3>
        <p class="text-teal-900">
          We offer fun and flexible work environments in our offices. We like to celebrate together, play together and work together. We arrange fun activities at the office frequently. All of this is to keep stress levels to a minimum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script setup needed
</script>

<style>

</style>