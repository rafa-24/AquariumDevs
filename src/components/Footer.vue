<template>
  <footer class="bg-[#0bd8a2] text-gray-800 py-8 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between mb-8">
        <!-- Logo and Contact with Social Icons -->
        <div class="mb-6 md:mb-0 flex flex-col md:pr-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900">Koombea</h2>
          <p class="mb-2">Call us</p>
          <p class="font-semibold text-gray-900">+1-888-840-3252</p>
          <!-- Social Icons -->
          <div class="flex space-x-4 mt-4">
            <a v-for="social in socials" 
               :key="social.name" 
               :href="social.url" 
               class="text-gray-800 hover:text-gray-600"
               target="_blank"
               rel="noopener noreferrer">
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Divider line (vertical) -->
        <div class="border-l border-gray-900 mx-8"></div>

        <!-- Navigation Sections -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Specialties -->
          <div>
            <h3 class="font-semibold mb-4 text-gray-900">Our Specialties</h3>
            <ul class="space-y-2">
              <li v-for="specialty in specialties" :key="specialty">
                <a href="#" class="hover:text-gray-600">{{ specialty }}</a>
              </li>
            </ul>
          </div>

          <!-- Locations -->
          <div>
            <h3 class="font-semibold mb-4 text-gray-900">Locations</h3>
            <ul class="space-y-2">
              <li v-for="location in locations" :key="location">
                <a href="#" class="hover:text-gray-600">{{ location }}</a>
              </li>
            </ul>
          </div>

          <!-- Partners -->
          <div>
            <h3 class="font-semibold mb-4 text-gray-900">Partners</h3>
            <ul class="space-y-2">
              <li v-for="partner in partners" :key="partner">
                <a href="#" class="hover:text-gray-600">{{ partner }}</a>
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-semibold mb-4 text-gray-900">Company</h3>
            <ul class="space-y-2">
              <li v-for="item in companyLinks" :key="item">
                <a href="#" class="hover:text-gray-600">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="text-sm">
        <p class="text-center text-gray-900">
          © {{ new Date().getFullYear() }} Koombea, Inc. All Rights Reserved. 
          <a href="#" class="hover:text-gray-600">Privacy policy</a> / 
          <a href="#" class="hover:text-gray-600">Site map</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const specialties = ref([
  'AI',
  'EdTech',
  'FinTech',
  'MedTech',
  'HiTech',
  'Retail',
  'IoT'
])

const locations = ref([
  'Barranquilla, CO',
  'New York, USA',
  'San Francisco, USA',
  'Miami, USA',
  'Chicago, USA'
])

const partners = ref([
  'Partner with Koombea',
  'Shopify Plus Partners',
  'AWS Partners',
  'Stripe Partners'
])

const companyLinks = ref([
  'Careers',
  'Brand Guidelines'
])

const socials = ref([
  {
    name: 'Facebook',
    url: '#',
    icon: 'i-mdi-facebook'
  },
  {
    name: 'YouTube',
    url: '#',
    icon: 'i-mdi-youtube'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'i-mdi-linkedin'
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'i-mdi-instagram'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'i-mdi-twitter'
  }
])
</script>
