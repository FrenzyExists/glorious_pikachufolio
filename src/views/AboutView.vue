<script>
  import {defineAsyncComponent} from "vue";
  export default {
    components: {
      AboutMe: defineAsyncComponent( () => import('../components/AboutMe.vue')),
      AboutContact: defineAsyncComponent( () => import('../components/AboutContact.vue'))
    }
  }
</script>

<template>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-7 md:px-12 lg:px-24 lg:py-12">
    <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-7xl sm:w-full">
      <div class="grid flex-wrap  justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        <div class="w-full px-6 py-3 lg:block">
          <AboutContact/>     
        </div>
        <div class="order-first w-full px-6 py-3 lg:block">
          <AboutMe/>
        </div>
      </div>
    </div>




      
  </div>
</template>
