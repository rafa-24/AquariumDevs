<template>
    <div class="max-w-7xl mx-auto sm:px-4 px-6 py-16">
      <div class="flex flex-col lg:flex-row gap-16">
        <!-- Image Column -->
        <div class="lg:w-1/2">
          <img 
            src="../assets/img/cafe.jpg" 
            alt="Koombea team member"
            class="w-90 h-82 object-cover rounded-lg"
            />
        </div>
  
        <!-- Content Column -->
        <div class="lg:w-1/2 flex flex-col">
          <!-- Text Section -->
          <div class="h-0.5 bg-teal-600 w-38 mb-6"></div>
          <div class="mb-16">
            <h2 class="text-4xl font-bold text-teal-900 mb-4">Koombea's Team</h2>
            <p class="text-gray-700 text-lg leading-relaxed mb-2 sm:mb-5">
              Want to join an innovative team where you'll constantly be inspired by your co-workers and projects? Koombea might be the perfect team for you! We admire and reward creativity and teamwork so check out some of our career opportunities to see if there is a fit for you at our vibrant company. We'd love to hear from you!
            </p>
          </div>
  
          <!-- Career Opportunities Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <!-- Cards with consistent style -->
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="14" rx="2"/>
                  <path d="M7 8h10M7 12h6" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">UI/UX Design</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="7" y="3" width="10" height="18" rx="2"/>
                  <circle cx="12" cy="17" r="1" fill="currentColor"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Mobile Development</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M15 4v16M8 12h7" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Sales & Marketing</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 12l2 2 4-4" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Project Management</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="8"/>
                  <path d="M12 8v8M8 12h8" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">DevOps</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M8 8l4 4-4 4M14 16h4" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Front-End Development</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 8h16M4 12h16M4 16h16" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Back-End Development</span>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
              <div class="w-8 h-8 mb-2">
                <svg class="text-[#050A30] " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <path d="M8 8h8M8 12h8M8 16h4" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="text-teal-900 text-sm">Quality Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script setup needed
  </script>