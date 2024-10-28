<template>
  <div class="font-custom">
    <Banner></Banner>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>