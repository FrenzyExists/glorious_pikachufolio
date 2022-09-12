<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="bg-gray-400">
    <header>
      <Navbar />
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
