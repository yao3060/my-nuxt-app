<template>
  <div class="p-4 flex gap-4">
    <button class="btn">Hello daisyUI</button>
    <select class="select w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const themes = [
  'light',
  'dark',
]
</script>
