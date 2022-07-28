<template>
  <footer class="flex items-center justify-center w-full h-16 text-black">
    <p class="text-gray-700">
      {{ template }} &copy; {{ new Date().getFullYear() }}
    </p>
    <div><p>test text</p></div>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const template = ref('My Nuxt App')
</script>

<style>
  footer {
    padding: 0;
    margin: 0;
  }
</style>
