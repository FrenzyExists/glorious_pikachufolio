<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="bg-light-gray text-gray px-6 shadow md:flex justify-between">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/research">Research</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
    </nav>
</template>