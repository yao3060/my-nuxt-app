<template>
  <div class="flex flex-col w-full h-screen overflow-hidden bg-green-50">
    <Header />
    <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: `My App`,
})
</script>
