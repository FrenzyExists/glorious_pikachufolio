<script setup>
import {defineAsyncComponent} from "vue";
import { RouterLink } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import router, { routeArray } from '../router';
</script>


<template>
    <Disclosure as="nav" class="bg-gray-800">
      <div class="mx-auto flex items-center justify-center px-2 sm:px-6 lg:px-8 shadow-xl">
        <div class="relative flex h-16 items-center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>

              <BIconList />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div class="hidden sm:ml-6 sm:flex ">
              <div class="flex flex-shrink-0 items-center">
                <span class="text-yellow text-4xl mr-3">
                    <font-awesome-icon icon="fa-solid fa-bolt" class="block h-8 w-auto text-yellow-200"/>
                </span>
                <h1 class="text-2xl mr-3 text-gray-100 pr-12">Garcia's</h1>
            </div>

              <div class="flex space-x-9">
                <RouterLink v-for="item in routeArray" :key="item.name" :to="item.path" :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'px-1 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in routeArray" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
