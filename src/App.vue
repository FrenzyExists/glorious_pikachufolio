<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div>
    <header>
      <bi bi-icon-lightning-charge-fill/>
      <Navbar />
    </header>
    <RouterView />
    <Footer />  
  </div>
</template>