<script setup>
import IconPuertoRicoVue from './icons/IconPuertoRico.vue';
</script>
<template>
    <footer>
        <!-- Social Media -->
        <div
            class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300"
        >
            <div class="mr-12 hidden lg:block">
                <span>Connect with me on social media!</span>
            </div>
            <div class="flex justify-center">
                <a href="https://github.com/FrenzyExists" class="mr-6 text-gray-600">
                    <BIconGithub/>
                </a>
                <a href="https://twitter.com/Not__Pikachu" class="mr-6 text-gray-600">
                    <BIconTwitter/>
                </a>
                <a href="https://www.linkedin.com/in/angel-luis-garcia/" class="mr-6 text-gray-600">
                    <BIconLinkedin/>
                </a>
            </div>
        </div>

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            <span class="inline-flex items-center">
                {{ new Date().getFullYear() }} | Made with
                <BIconHeartFill class="m-2" />in
                <IconPuertoRicoVue/>
            </span>
        </div>
    </footer>
</template>