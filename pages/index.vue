<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    <p>Here's a counter:</p>
    <div class="flex items-center justify-center">
      <button
        class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="counterStore.increment()"
      >
        +
      </button>
      <span class="mx-2">{{ counterStore.count }}</span>
      <button
        class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="counterStore.decrement()"
      >
        -
      </button>
    </div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '~/stores/counter'
  const counterStore = useCounterStore()

  const title = 'Home Page Title'

  definePageMeta({
    layout: 'custom',
  })

  useHead({
    title,
    meta: [
      { name: 'description', content: 'My amazing site.' },
      { name: 'keywords', content: 'nuxt, vue' },
    ],
  })
</script>
